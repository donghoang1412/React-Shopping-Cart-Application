import React from "react"
import StarForDisplayView from "../star-for-display/star-for-display.view"

export default function StarForDisplayContainer (props) {
    const  {
        rating
    } = props;
    return(
        <StarForDisplayView rating={rating}/>
    )
}