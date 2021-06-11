import * as ActionTypes from "../ActionTypes";

let INITIAL_STATE = []

export default function CartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case ActionTypes.AddToCart:
            //check if cart already has the product, 
            //if yes then add the quantity of the cart product with the new product quantity
            // if no then add the newproduct to cart

            const newProduct = action.payload.product;
            if(newProduct.quantity === undefined){
                newProduct.quantity =1
            }
            if (state.length != 0) {
                let foundProd = false
                for (let value of state) {             
                    if (value.productName === newProduct.productName) {
                        foundProd = true
                        value.quantity += newProduct.quantity || 1
                        break
                    }
                }
                if(!foundProd){
                    state.push(newProduct)
                }
            }
            else {
                // newProduct.quantity =1 
                state.push(newProduct)
            }



            return [...state];

        case ActionTypes.removeItemFromCart:

            let item1 = state.filter(item => item._id != action.payload.id)

            console.log("My item", item1)
            return item1
        // return {cart:[...state.cart, action.payload.product]};

        case ActionTypes.UPDATE_CART:
            return [...action.payload.productList];
        default:
            return state;
    }
}