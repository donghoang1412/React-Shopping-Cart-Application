import React from "react"
import StarForReviewView from "../star-for-review/star-for-review.view"
import {addToReview} from "../../../../State/Review/ReviewActions"
import { useDispatch } from "react-redux"

export default function StarForReviewContainer(props) {
    const [rating, setRating] = React.useState(null)
    const [hover, setHover] = React.useState(null)

    const dispatch = useDispatch()

    React.useEffect(() =>{
        dispatch(addToReview(rating))
    },[rating])
    
    return (
        <div>
            <StarForReviewView
                rating={rating}
                setRating={setRating}
                hover={hover}
                setHover={setHover}

            />
            
        </div>
    )
}