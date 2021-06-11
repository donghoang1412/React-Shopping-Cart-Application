import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import userReducer from "./User/UserReducer";
import hobbyReducer from "./Hobby/HobbyReducer";
import productReducer from "./Product/ProductReducer";
import cartReducer from "./Cart/CartReducer"
import CouponReducer from "./Coupon/CouponReducer"
import ReviewReducer from "./Review/ReviewReducer"
import DisplayHistoryReducer from "./DisplayHistory/DisplayHistoryReducer"
import BellReducer from "./bell/BellReducer"
let logger = () => (next) => (action) => {
    //currying in javasript where we pass function as input and recieve function as output
    console.log("Logged Action : Store File ", action); 
    next(action); //move to the actual execution
};
export default createStore(
    combineReducers({
        userReducer, //short-hand ->  used to replace userReducer : userReducer with only - userReducer
        hobbyReducer,
        productReducer,
        cartReducer,
        CouponReducer,
        ReviewReducer,
        DisplayHistoryReducer,
        BellReducer
    }),
    {}, //intial state for store states
    applyMiddleware(logger, thunk, promise) //middle wares tp used at various places like action.js
)