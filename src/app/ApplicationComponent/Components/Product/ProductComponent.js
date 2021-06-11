import React, {Fragment, useState } from "react";
import {useDispatch} from "react-redux";

import {saveProduct} from "../../../State/Product/ProductActions"
import DisplayProduct from "./DisplayProductComponent";

let ProductComponent = ()=>{

    const [name, setName] = useState("Product Name"); //initializes the name and returns a callback to save name on state change
    const [price, setPrice] = useState(0);
    const [desc, setDescription] = useState("Product Description");
    const [rating, setRating] = useState("Product Rating");

    const saveProductDispatch = useDispatch();

    const captureValueFromTextBoxes = (evt)=>{
        let target = evt.target;
        let classlist = target.classList;

        if(classlist.contains("pname")){
            setName(target.value)
        }else if(classlist.contains("price")){
            setPrice(parseInt(target.value))
        }else if(classlist.contains("desc")){
            setDescription(target.value)
        }else{
            setRating(target.value)
        }
    }

    const saveProductClick = ()=>{
        //saving product using server call
        //alert(`You've saved a product with these details: Name = ${name}, Price = $${price}, Description = ${desc}, Rating = ${rating}`)
         
        let productToSave = {
            name, 
            price,
            desc,
            rating
        };
        
        saveProductDispatch(saveProduct(productToSave));

    }


    return(
        <Fragment>
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input type="text" className="form-control col-md-6 pname" value={name} 
                            placeholder="Product Name"
                            onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Price </b>
                        <input type="number" className="form-control col-md-6 price" value={price} 
                          placeholder="Product Price"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Description </b>
                    <input type="text" className="form-control col-md-6 desc" value={desc} 
                          placeholder="Please Describe the product"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Ratings </b>
                    <input type="text" className="form-control col-md-6" value={rating} 
                          placeholder="Ratings"
                          onChange={captureValueFromTextBoxes} />
                    </div>
                    
                    <input type="button" className={"btn btn-primary col-md-3"} value={"Save Product"} onClick={saveProductClick}/>
                </div>
                
                <br/>
                <DisplayProduct/> 
            </section>
        </Fragment>
    );
}

export default ProductComponent;