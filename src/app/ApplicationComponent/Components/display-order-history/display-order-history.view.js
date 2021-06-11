import React from "react";
import "./display-order-history.css"
import { Button } from "@material-ui/core";
import PopupReviewContainer from "../star/popup-review/popup-review.container"
import { useDispatch } from "react-redux";
import {addReviewObjToStore}  from "../../../State/DisplayHistory/DisplayHistoryActions"
export default function Display(props) {
    const {
        orderHistory,
        deleteOrder,
        findUserHistory,
        trigger,
        setTrigger,
        userName
    } = props;

    const dispatch = useDispatch()
    
    const addReview =(productName) =>{
        const reviewObj = {
            "userName" :  userName,
            "productName" : productName
        }

        dispatch(addReviewObjToStore(reviewObj))
        setTrigger(true)
        
    }


    console.log("order history: ", orderHistory)


    const CLASS_PREFIX = "display-order-history__"

    return (
        <div className={`${CLASS_PREFIX}root`}>

            {orderHistory.map((data, id) => {
                return (
                    <table key={id}>
                        <tbody>
                            <tr>
                                <th> Order Name</th>
                                <th> Quantity</th>
                                <th></th>
                            </tr>
                            {data.order.map((order, id) => {

                                return (

                                    <tr key={id}>
                                        <td> {order.productName}</td>
                                        <td> {order.quantity}</td>
                                        <td> <Button variant="contained" color="outlined" onClick={() =>addReview(order.productName) }> Add Review </Button></td>


                                    </tr>

                                )

                            })}
                            <tr>{
                                data.expired ?
                                    (<p> Delivered </p>)
                                    :
                                    (<p> <Button variant="contained" color="outlined" onClick={() => deleteOrder(data)}> Cancel </Button></p>)
                            }
                            </tr>

                        </tbody>
                    </table>
                )
            })}

            {trigger ? (
                <PopupReviewContainer
                trigger={trigger}
                setTrigger={setTrigger}                
            />
            ) : "" }
            
        </div>
    )
}