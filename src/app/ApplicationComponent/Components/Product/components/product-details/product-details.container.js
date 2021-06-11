import React, {useState}from 'react';
import ProductDetails from './product-details.view';
import {useDispatch, useSelector} from 'react-redux'
import {
    addProductToCart,
    updateCart,
} from "../../../../../State/Cart/CartAction";

// HOC: Higher order component
const ProductDetailsContainer = (props) => {

    let dispatch = useDispatch();

     // Get the state array object
    const productList = useSelector(store => store.cartReducer);

    // this is for product popup
    const [triggerProductPopup, setTriggerProductPopup] = useState(false)
  
    const handleClose = () => {
      setTriggerProductPopup(false);
    };

    console.log(productList)
    let addProdToCart = (product) => {

            dispatch(addProductToCart(product))


    }
    return (
        
        <ProductDetails
            {...props}  // MOST IMPORTANT FREQUENTLY USED  
            addProdToCart = {addProdToCart} 
            productList ={productList}    
            setTriggerProductPopup={setTriggerProductPopup}
            triggerProductPopup={triggerProductPopup}    
            handleClose={handleClose}               
        />
        
    )
}

export default ProductDetailsContainer;