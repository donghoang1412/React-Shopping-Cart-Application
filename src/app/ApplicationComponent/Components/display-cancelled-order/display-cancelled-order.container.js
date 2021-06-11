import React, { useState } from "react"
import DisplayCancelled from "./display-cancelled-order.view"
import {useSelector, useDispatch} from "react-redux"
import { addProductToStore } from "../../../State/Product/ProductActions"
import { addProductToCart } from "../../../State/Cart/CartAction"
import { element } from "prop-types"

export default function DisplayCancelledOrder () {
    const username = useSelector((state) => state.userReducer.user.userName)

    const dispatch = useDispatch()

    console.log(username)
    React.useEffect(() =>{
        findCancelledOrder(username)
    },[])

    React.useEffect(() =>{
        findCancelledOrder(username)
    },[username])

    const [cancelledOrder, setCancelledOrder] = useState([])

    const [saveForCheckout, setSaveForCheckout] = useState(undefined)
    //api to get the cancelled order
    const findCancelledOrder = async (username) =>{
        const api = `http://localhost:9090/user/api/getCancelledOrder?userName=${username}`;
        
        console.log("my username", username) 
        
        const response = await fetch(api, {
            method : 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        
        setCancelledOrder(response)
        console.log("response from save cancelled" ,response)

    }
    

    const deleteFromCancelled = async (data) =>{
        // setSaveForCheckout(true)
        console.log(data.userName)

        const api = "http://localhost:9090/user/api/deleteCancelled";
        
        console.log("my username", username) 
        
        const response = await fetch(api, {
            method : 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        
        for (let i = 0; i<data.order.length; i++) {
            console.log(data.order.length)
            dispatch(addProductToCart(data.order[i]))
        }
        const tempArray = cancelledOrder.filter(element => element.productName !== data.productName);
        setCancelledOrder(tempArray)
    }
    

    return(
        <DisplayCancelled
            cancelledOrder ={cancelledOrder}
            saveForCheckout={saveForCheckout}
            setSaveForCheckout={setSaveForCheckout}
            deleteFromCancelled={deleteFromCancelled}
        />
    )
}