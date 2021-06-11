import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    coupon :{
        number: "",
        percent: ""
    }
}

export default function CouponReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.GENERATECOUPON: 
            return {...state, coupon: action.payload.coupon};
                       
        
        default:
            return state;
    }
}