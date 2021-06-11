import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = {
    products:[],
}

export default function ProductReducer(state=INITIAL_STATE, action)
{
    switch (action.type) {        

        case ActionTypes.FETCH_PRODUCTS:            
        return {...state, products:action.payload.productList};
        
        // case ActionTypes.FETCH_PRODUCTS_FULFILLED:            
        //     return {...state, products:action.payload};

        default:
            return state;
    }
}