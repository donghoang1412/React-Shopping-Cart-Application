import React from "react"
import PopupReviewView from "./popup-review.view"
import { useSelector } from "react-redux"

export default function PopupReviewContainer(props) {
    const {
        trigger,
        setTrigger,
    } = props;

    const rating = useSelector((state) => state.ReviewReducer.review)

    const reviewObj = useSelector((state) => state.DisplayHistoryReducer.review)
    React.useEffect(() =>{
        console.log(" My reviewOBJ ",reviewObj)
    },[reviewObj])
    const {
        userName,
        productName
    } = reviewObj

    console.log("My rating", rating)

    const submitReview = async () =>{
        const reviewObj = {
            "userName" : userName,
            "review" : [
                {
                    "productName" : productName,
                    "rating" : rating
                }
            ]
        }

        const api = "http://localhost:9090/user/api/saveReview"

        const response = await fetch(api, {
            method : 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(reviewObj)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        console.log(response)
    }
    return (trigger) ? (
        <div>
            <PopupReviewView
            setTrigger={setTrigger}
            productName={productName}
            userName={userName}
            submitReview ={submitReview}
        />
        </div>
    ) : ""
}