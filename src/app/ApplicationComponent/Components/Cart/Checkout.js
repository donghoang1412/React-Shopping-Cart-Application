import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import './Checkout.css'
import DisplayHistory from "../display-order-history/display-order-history.container"
import {addUserToStore} from "../../../State/User/UserActions"
import { useHistory } from "react-router-dom";
import { increaseNotificationCount } from "../../../State/bell/BellActions";

let Checkout = (props) => {

    const history = useHistory()

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cartReducer)

    //it is for cartSummary
    let total = props.total
    let totalItem = props.totalItem
    const [showPayment, setshowPayment] = useState(false)

    const myCoupon = useSelector((state) => state.CouponReducer.coupon)

    const [inputCoupon, setInputCoupon] = useState("")

    const getCoupon = (event) => {
        setInputCoupon(event.target.value)
    }



    const [showTotalAfterCoupon, setShowTotalAfterCoupon] = useState(false)

    const [showInvalidMessage, setShowInvalidMessage] = useState(false)

    //it checks to see if the coupon is valid
    const checkCoupon = () => {
        if (inputCoupon == myCoupon.rand) {
            setShowTotalAfterCoupon(true)
        }
        else {
            setShowTotalAfterCoupon(false)
            setShowInvalidMessage(true)
        }
    }


    const myuserName = useSelector((state) => state.userReducer.user.userName)

    const timeString = new Date().getTime();

    
    // console.log("My orderArray",orderArray)
    //it show the checkout component
    const paymentMessage = async () => {
        setshowPayment(!showPayment)

        var orderArray = cart;
        
        let objectOrder = {
            userName: myuserName,
            order: orderArray,
            time: timeString,
            
        }
        console.log(objectOrder)


        const api = "http://localhost:9090/user/api/saveOrder"

        // if you use body you HAVE TO INCLUDE HEADER, fuck this shit
        //took me 5 hours
        const response = await fetch(api, {
            method: 'POST',          
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objectOrder)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        console.log(response);
        //call savNot function to save notification
        saveNotification()
        increaseNotification()
        history.push("/displayhistory")
    }
    
    const increaseNotification = () =>{
        dispatch(increaseNotificationCount())
    }

    //function to save notification after checkout
    const saveNotification = async () =>{
        const notObj = {
            userName: myuserName,
            type: "a new order",
            time: timeString,
            click: 1
        }

        const api = "http://localhost:9090/user/api/saveNotification"
        const response = await fetch(api, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notObj)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        
    }
    const CLASS_PREFIX = "CheckOut__";

    return (
        <Fragment>
            {!showPayment ?
                <Fragment>
                    <table className={`${CLASS_PREFIX}table`}>
                        <tbody>
                            <tr > <h2 style={{ textAlign: "center" }}>Cart Summary</h2></tr>
                            <tr>
                                <th> Item </th>
                                <th> Price</th>
                                <th> Qty</th>
                                <th> Subtotal</th>

                            </tr>
                            {cart.map(product => {
                                return <tr>
                                    <td> {product.productName}</td>
                                    <td> {product.price}</td>
                                    <td> {product.quantity}</td>
                                    <td> {product.price * product.quantity}</td>
                                </tr>
                            })}

                        </tbody>

                    </table>
                    <br />
                    <table className={`${CLASS_PREFIX}table`}>
                        <tbody>
                            <tr>
                                <th> Total Item</th>
                                <th> Total</th>

                            </tr>
                            <tr>
                                <td>{totalItem} </td>
                                <td>  ${total} </td>
                            </tr>
                            <tr>
                                <th colSpan="2"> Coupon Code</th>
                            </tr>
                            <tr>
                                <td colSpan="2"> <input type="text" maxLength="6" onChange={getCoupon}></input></td>
                            </tr>
                            <tr>
                                <td colSpan="2"><Button variant="contained" color="primary" margin-top="3px" margin-left="3px" onClick={checkCoupon}> Apply The Coupon</Button></td>
                            </tr>
                            {showTotalAfterCoupon ?
                                <table className={`${CLASS_PREFIX}table`}>
                                    <tbody>
                                        <tr>
                                            <th> Discount </th>
                                            <th> Total</th>
                                        </tr>
                                        <tr>
                                            <td>  {myCoupon.percent}%</td>
                                            <td>  ${total - (total * myCoupon.percent / 100)}</td>
                                        </tr>
                                        <tr>
                                            <Button variant="contained" color="primary" className="Checkout__make-payment" onClick={paymentMessage} >
                                                Make Payment
                                            </Button>
                                        </tr>
                                    </tbody>
                                </table>
                                :
                                <table className={`${CLASS_PREFIX}table`}>
                                    <tbody>
                                        {showInvalidMessage ?
                                            <tr>
                                                <tr> Your Coupon is invalid</tr>
                                            </tr>
                                            :
                                            <tr> </tr>
                                        }
                                        <tr>
                                            <Button variant="contained" color="primary" className="Checkout__make-payment" onClick={paymentMessage} >
                                                Make Payment
                                            </Button>
                                        </tr>
                                    </tbody>
                                </table>
                            }
                        </tbody>
                    </table>
                    <br />

                </Fragment>
                : <DisplayHistory/>}

        </Fragment>
    )
}

export default Checkout