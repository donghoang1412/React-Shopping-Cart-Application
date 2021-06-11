import React, { useState } from "react";

import './product-details.css';
import { Button } from '@material-ui/core'
import StarForDisplayContainer from "../../../star/star-for-display/star-for-display.container"
import PopupProductContainer from "../../popup-product/popup-product.container"
import SnackBarNotification from "../../../../../CommonComponent/snackbar-notification/SnackBarNotification"

export default function ProductDetails(props) {

    // Object deconstruction
    const {
        product,
        addProdToCart,
        setTriggerProductPopup,
        triggerProductPopup,
        handleClose
    } = props;

    const CLASS_PREFIX = "product-details__";

    // this is for the snack bar to pop up when a product is added by using button add to cart
    const [state, setState] = React.useState({
        open: false,
        vertical: "top",
        horizontal: "center",
        message: ""
    });

    const { vertical, horizontal, open, message } = state;

    const handleClick = (newState) => () => {
        addProdToCart(product)
        setState({ open: true, ...newState });
        
    };

    const handleCloseSnackBar = () => {
        setState({ ...state, open: false });
    };

    return (

        <div className={`${CLASS_PREFIX}root`}>
            <p>{product.productName}</p>
            <p>{product.desc}</p>
            <p>{product.price}</p>
            {/* <p> <StarForDisplayContainer rating={product.rating}/> </p> */}
            <Button variant="outlined" color="primary" onClick={handleClick({ vertical: "bottom", horizontal: "left",message: product.productName + " was added to the cart" })}>Add to cart</Button>
            <Button variant="outlined" color="primary" style={{ marginLeft: "10px" }} onClick={() => setTriggerProductPopup(true)}> More...</Button>
            <PopupProductContainer
                triggerProductPopup={triggerProductPopup}
                setTriggerProductPopup={setTriggerProductPopup}
                productName={product.productName}
                price={product.price}
                desc={product.desc}
                handleClose={handleClose}
            />
            <SnackBarNotification
                state={state}
                handleCloseSnackBar={handleCloseSnackBar}
            />
        </div>
    )
}