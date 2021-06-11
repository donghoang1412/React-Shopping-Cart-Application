//this will contain all the action types that we raise on action creators or events

//For User
export const AddUserToStore = "USER.AddUserToStore";
export const USER_SET_LOGIN_AS_SUCCESS = "USER_SET_LOGIN_AS_SUCCESS";
export const USER_SET_LOGOUT_AS_SUCCESS = "USER_SET_LOGOUT_AS_SUCCESS";

//For Hobby
export const AddHobbyToStore = "HOBBY.AddHobbyToStore";

//For Product
export const FETCH_PRODUCTS = "PRODUCT.FETCH_PRODUCTS";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//Cart
export const AddToCart = "CART.AddToCart";
export const removeItemFromCart ="CART.removeItemFromCart";
export const UPDATE_CART = "UPDATE_CART";

//Coupon
export const GENERATECOUPON = "COUPON.GENERATE"

//Review
export const AddReview = "REVIEW.ADDREVIEW"

//display history for adding review
export const AddReviewObj = "ADD_REVIEW_OBJ_TO_STORE"

//bell
export const INCREASE_NOTIFICATION_COUNT = "INCREASE_NOTIFICATION_COUNT"
export const SET_NOTIFICATION_COUNT = "SET_NOTIFICATION_COUNT"
