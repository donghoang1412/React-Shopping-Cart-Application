import * as ActionTypes from "../ActionTypes";


export const addReviewObjToStore = (review)=>({
    type: ActionTypes.AddReviewObj,
    payload:{review}
})


