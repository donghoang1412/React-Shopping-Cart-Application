import React from "react"
import { Button } from "@material-ui/core"

import StarForReviewContainer from "../star-for-review/star-for-review.container"

import "./popup-review.css"
export default function PopupReviewView(props) {
    const {
        trigger,
        setTrigger,
        productName,
        userName,
        submitReview
    } = props // object destructuring 

   React.useEffect(() => {
        console.log("ProductName: ", productName);
   }, [])

    return (

        <div className="PopupReviewView__popup">
            <div className="PopupReviewView__popup-inner">
                <Button variant="contained" color="outlined"  className="close-button" onClick={() =>props.setTrigger(false)} > Close </Button>
                <h3> Hi, {userName}! Please rate our product</h3>
                <h4>{productName}</h4>

                <StarForReviewContainer />
                <Button variant="contained" color="outlined" onClick={() => submitReview()}> Submit  </Button>

            </div>
        </div>
    )

}