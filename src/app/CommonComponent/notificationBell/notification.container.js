import React from "react"
import NotificationView from "./notification.view"
import { useSelector, useDispatch } from "react-redux"
import {setNotificationCount} from "../../State/bell/BellActions"
export default function NotificationContainer() {

    const dispatch = useDispatch()

    const username = useSelector((state) => state.userReducer.user.userName)

    React.useEffect(() => {
        getNotification()
    }, [])

    const notificationCount = useSelector((state) => state.BellReducer.notificationCount)

    const [open, setOpen] = React.useState(false)

    const getNotification = async () => {
        const api = `http://localhost:9090/user/api/getNotification?userName=${username}`
        const response = await fetch(api, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        // console.log("My notification number", response.length)
        // setNotificationNumber(response.length)
        let numNoti = 0
        console.log("my click", response[0].click)
        for (let i = 0; i < response.length; i++) {
            numNoti += response[i].click

        }
        // setNotificationNumber(numNoti)
        // console.log("my number of notifitaion " , response.length)
        dispatch(setNotificationCount(numNoti))
    }

    const removeNotification =() =>{
        if(notificationCount !==0 ){
            dispatch(setNotificationCount(0))
            removeBackEndNotification()
        }
        setOpen(!open)
    }

    const removeBackEndNotification =async () =>{

        const api =`http://localhost:9090/user/api/updateNotification?userName=${username}`
        const response = await fetch(api, {
            method : 'PUT',
            headers : {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
    }

    const handleClickAway = () => {
        setOpen(false);
      };

    return (
        <NotificationView
           notificationCount={notificationCount}
           open ={open}
           removeNotification={removeNotification}
           handleClickAway={handleClickAway}

        />
    )
}