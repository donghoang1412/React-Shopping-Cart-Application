import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    review: 0,
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.AddReview:            
        return {...state, review:action.payload.review};
        
        default:
            return state;
    }
}