import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../State/Product/ProductActions"
import ProductDetails from './components/product-details/product-details.container';
import './DisplayMyProduct.css';
import { addUserToStore } from "../../../State/User/UserActions"
import { Button } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Product = () => {

  const products = useSelector((state) => state.productReducer.products);

  const dispatchToFetchProd = useDispatch();

  useEffect(() => {
    // products && products.length < 1 ?
    //   dispatchToFetchProd(fetchProducts()) : ""; 

    initProducts();

  }, []) //when we intilaise the the value like [], this becomes componentDidMount (it'll called for once after first render)


  const initProducts = () => {
    if (products && products.length < 1) {
      dispatchToFetchProd(fetchProducts());
    }
  }

  console.log("My Product List:", products)


  const styles = (className) => {
    const CLASS_PREFIX = "DisplayMyProduct__";
    return `${CLASS_PREFIX}${className}`;
  }

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className={styles('root')}>
      <div className={styles('search-bar-wrap')}>
        <FontAwesomeIcon icon={faSearch} className={styles('search-icon')} />
        <input className={styles('input')} type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }}></input>
      </div>



      {!!products && products.filter((product) => {
        if (searchTerm === "") {
          return product
        } else if (product.productName.toLowerCase().includes(searchTerm.toLowerCase())) {
          return product
        }
      })
        .map((product) => {
          return (
            <ProductDetails
              key={product.productName}
              product={product}
            />
          )
        })}

    </div>
  );
}
export default Product
