import * as ActionTypes from "../ActionTypes";


export const addToReview = (review)=>({
    type: ActionTypes.AddReview,
    payload:{review}
})

