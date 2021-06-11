import React, {Fragment, useState } from "react";
import {useDispatch} from "react-redux";

import {saveProduct} from "../../../State/Product/ProductActions"
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import {addUserToStore} from "../../../State/User/UserActions"
let MyAddProductComponent = ()=>{

    //this is use to check if the user still log in, if the user is still login, 
    // refeshing the page will not cause it to relogin

    const [productName, setProductName] = useState("Product Name"); //initializes the name and returns a callback to save name on state change
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating");

    const saveProductDispatch = useDispatch();

    const setProdName =(e) =>{
        setProductName(e.target.value)
    }
    const setProdPrice =(e) => {
        setPrice(e.target.value)
    }
    const setProdDesc =(e) =>{
        setDescription(e.target.value)
    }
    const setProdRating =(e) =>{
        setRating(e.target.value)
    }
    const saveProductClick = ()=>{
        //saving product using server call
        //alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Description = ${desc}, Rating = ${rating}`)
         
        let productToSave = {
            productName, 
            price,
            desc,
            rating
        };
        
        saveProductDispatch(saveProduct(productToSave));
    }
    return(
        <Fragment>
            <form style={{margin:"5%", width:"40%", border:"groove",borderRadius:"10px",padding:"20px",backgroundColor:"#e7e7e7"}}>
           <TextField 
                    label="Product Name"
                    variant="outlined"
                    margin="normal"
                    onChange={setProdName}
                    value={productName}
                />
                <br/>
            <TextField 
                    label="Price"
                    variant="outlined"
                    margin="normal"
                    onChange={setProdPrice}
                    value={price}
                />
                  <br/>
            <TextField 
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    onChange={setProdDesc}
                    value={desc}
                />
                  <br/>
            <TextField 
                    label="Rating"
                    variant="outlined"
                    margin="normal"
                    onChange={setProdRating}
                    value={rating}

                />
                <br/>
                <br/>

            <Button variant="contained" color="outlined" onClick={saveProductClick}> Add Product To Store</Button>
            </form>
        </Fragment>
    );
}

export default MyAddProductComponent;