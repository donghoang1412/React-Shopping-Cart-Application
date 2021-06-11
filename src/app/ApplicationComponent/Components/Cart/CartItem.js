import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarForDisplayContainer from "../star/star-for-display/star-for-display.container"

let CartItem = (props) => {
    const {
        handleClick,
        product,
        
    } = props

    const [inputQty, setInput] = useState(props.product.quantity)

    let onChangeQty = (e) => {
        setInput(e.target.value)
        if (e.target.value === '') {
            props.product.quantity = 0
        }
        else {
            props.product.quantity = parseFloat(e.target.value)
        }
    }

    // let removeItem =() =>{
    //     let id = props.product._id
    //     removeFromCart(removeItemFromCart(id))

    //     // console.log(useSelector((state) => state.cartReducer))
    // }

  

    return (

        <Fragment>
            <tr>
                <td> {props.product.productName}</td>
                <td> {props.product.price}</td>
                <td> {props.product.desc}</td>
                <td> <StarForDisplayContainer rating={props.product.rating} /> </td>
                {/* <td> <input type ={Number} value={product.quantity}> </input> </td> */}
                <td>
                    <input type="number" value={inputQty} onChange={onChangeQty} /></td>
                <td> ${(props.product.price * props.product.quantity).toFixed(2)}  </td>
                <td><button onClick={handleClick({ vertical: "bottom", horizontal: "left", message: props.product.productName + " was removed from the cart", id: props.product._id})}> Remove</button> </td>
            </tr>
            
        </Fragment>
    )
}
export default CartItem;