import React from "react"
import "./popup-product.css"
import { Button } from "@material-ui/core"
import StarForDisplayContainer from "../../star/star-for-display/star-for-display.container"
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function PopupProductView(props) {
    const {
        triggerProductPopup,
        setTriggerProductPopup,
        productName,
        price,
        desc,
        countReview,
        productRating,
        handleClose = { handleClose }
    } = props


    // return (
    //     <div className="PopupProductView__popup">
    //         <div className="PopupProductView__popup-inner">
    //             <div>
    //                 <Dialog
    //                     open={open}
    //                     onClose={handleClose}
    //                 >

    //                     <Button color="primary" variant="contained"> Fuck You </Button>
    //                 </Dialog>
    //             </div>

    //             {/* <Button variant="contained" color="outlined" className="close-button" onClick={() => setTriggerProductPopup(false)} > Close </Button> */}
    //             {/* <div style={{ height: "500px", display:"flex"}}>
    //                 <div style={{border: "1px solid  black", height: "400px", width:"400px",margin: "auto"}}>
    //                     <h1>Picture of my product</h1>
    //                 </div>
    //                 <div style={{border: "1px solid  black", height: "400px", width:"400px", margin:"auto", padding:"16px"}}>
    //                     <h4>{productName}</h4>

    //                     <h4>${price}</h4>

    //                     <h4>{desc}</h4>
    //                     <h4> Review: <StarForDisplayContainer rating ={Math.round(productRating/countReview)} /> ( {countReview} reviews) </h4>
    //                 </div>
    //             </div> */}
    //         </div>
    //     </div>
    // )

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            className={"PopupProductView__dialog"}
        >
            <div className={"PopupProductView__popup"}>
                <div className={"PopupProductView__popup-inner"}>
                    <div style={{ height: "500px", display: "flex" }}>
                        <div className={"PopupProductView__image"} >
                            <h1>Picture of my product</h1>
                        </div>
                        <div className={"PopupProductView__product"} >
                            <h4>{productName}</h4>

                            <h4>${price}</h4>

                            <h4>{desc}</h4>
                            <h4> Review: <StarForDisplayContainer rating={Math.round(productRating / countReview)} /> ( {countReview} reviews) </h4>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}
