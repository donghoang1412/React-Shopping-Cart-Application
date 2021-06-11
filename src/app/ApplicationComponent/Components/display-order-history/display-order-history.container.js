import React ,{useState} from "react";
import { useSelector,useDispatch } from "react-redux"
import Display from "./display-order-history.view"

export default function DisplayHistory() {

    const username = useSelector((state) => state.userReducer.user.userName)


    React.useEffect(() => {
        findUserHistory(username)
    },[]);

    React.useEffect(() =>{
        findUserHistory(username)
    },[username])



    const [orderHistory, setOrderHistory] = React.useState([])

    //this state is for popup review
    const [trigger, setTrigger] = useState(false)


    //utility function to check if the order can be canceled or not
    const isOrderExpired = (timeInDB, expiredDayCount) => {
        const timeNow = new Date().getTime();
        const differenceInTimes = timeNow - timeInDB;
        const differenceInDays = differenceInTimes / (1000 * 3600 * 24);
        console.log(differenceInTimes)
        console.log(differenceInDays)

        return differenceInDays > expiredDayCount;
    }
    const deleteOrder = async (data) =>{
        const api = "http://localhost:9090/user/api/deleteUserOrder"

        // if you use body you HAVE TO INCLUDE HEADER, fuck this shit
        //took me 5 hours
        const response = await fetch(api, {
            method: 'DELETE',          
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        console.log(response);
        
        //Option 1
        // await findUserHistory(username)

        //Option 2 (more efficient)
        // const tempArr = [];
        // for(let element of orderHistory){
        //     if(element._id !== data._id){
        //         tempArr.push(element);
        //     }
        // }

        //Option 3  (most efficient)
        const tempArr = orderHistory.filter(element => element._id !== data._id);

        setOrderHistory(tempArr);

        saveCancelledOrder(data)
    }

    const saveCancelledOrder =async (data) =>{
        const api = "http://localhost:9090/user/api/saveCancelledOrder"

        const response = await fetch(api, {
            method : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }).then(res => res.json())
        .then(resJson => resJson)
        .catch(err => err)
        
        console.log(response)
    }

    const findUserHistory = async (username) => {
        console.log("username ", username)
        const api = `http://localhost:9090/user/api/getUserOrder?userName=${username}`;

        // if you use body you HAVE TO INCLUDE HEADER, fuck this shit
        //took me 5 hours
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        
        for (let i = 0; i< response.length; i ++){
            const expired = isOrderExpired(response[i].time, 2)
            response[i].expired = expired
            console.log("my expired", expired)
        }
        setOrderHistory(response);
        
    }

    return (
        <Display
            orderHistory={orderHistory}
            deleteOrder = {deleteOrder}
            findUserHistory={findUserHistory}
            trigger={trigger}
            setTrigger={setTrigger}
            userName = {username}
        />

    )
}