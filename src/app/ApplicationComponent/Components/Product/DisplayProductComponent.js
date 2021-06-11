import React, {Fragment, useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";

import { fetchProducts } from "../../../State/Product/ProductActions"
import DisplayDetailedProduct from "./components/product-details/product-details.container";


let DisplayProduct = (props)=>{
    
    let products = useSelector((state)=>state.productReducer.products);

    let dispatchToFetchProd = useDispatch();

    useEffect(()=>{
        products && products.length<1 ?
            dispatchToFetchProd(fetchProducts()): "";
    },[]) //when we intilaise the the value like [], this becomes componentDidMount (it'll called for once after first render)

    return(
        <Fragment>
            { products && products.length >= 1 ?
            
                products.map((product)=>{
                    //return product.name;
                    return <DisplayDetailedProduct 
                    product={product} 
                    key={product._id}   
                    />;
                })

            :
            <h2>{`No Records Present To Show`}</h2>
            }
        </Fragment>
    )

}

export default DisplayProduct;