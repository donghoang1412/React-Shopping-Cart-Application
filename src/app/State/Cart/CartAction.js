import * as ActionTypes from "../ActionTypes";


export const removeItemFromCart = (id)=>({
    type: ActionTypes.removeItemFromCart,
    payload:{id}
})

export const addProductToCart = (product)=>({
    type: ActionTypes.AddToCart,
    payload: {product}
})

export const updateCart = (productList)=>({
    type: ActionTypes.UPDATE_CART,
    payload: {productList}
})

