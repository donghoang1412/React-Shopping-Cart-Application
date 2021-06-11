import React, {Fragment, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import { addCoupon } from "../../../State/Coupon/CouponActions";
import {addUserToStore} from "../../../State/User/UserActions"

let Coupon = () =>{
    // let [coupon, setCoupon] = useState({rand: "", percent: ""})
    const dispatch = useDispatch();
    
    let useCoupon = useSelector((state) => state.CouponReducer.coupon)
    const generateCoupon = () =>{
        let min = 100000;
        let max = 999999;
        let rand = parseInt( min + (Math.random() * (max-min)));
        let percent = 20
        // setCoupon({rand: rand, percent: percent})
        // console.log(coupon)
        // dispatch(addCoupon(coupon))
        dispatch(addCoupon({rand: rand, percent: percent}))
        
        
    }

    return(
        <Fragment>
            <Button variant= "contained" color="primary" onClick={generateCoupon}> Generate Coupon</Button>
            <h2 style={{color:"white"}}>{useCoupon.rand}</h2>
        </Fragment>
    )
}
export default Coupon