import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
   review : {
        userName: "",
        productName: "",
        rating: 0
    }
}

export default function DisplayHistoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ActionTypes.AddReviewObj:            
            return {...state, review: action.payload.review}

        default:
            return state;
    }
}