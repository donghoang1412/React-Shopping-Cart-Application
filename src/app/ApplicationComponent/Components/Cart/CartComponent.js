import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Cart/CartItem"
import CheckOut from "./Checkout"
import { Button } from '@material-ui/core'
import "./CartComponent.css"
import { addUserToStore } from "../../../State/User/UserActions"
import { addProductToCart } from "../../../State/Cart/CartAction"
import { removeItemFromCart } from "../../../State/Cart/CartAction"
import SnackBarNotification from "../../../CommonComponent/snackbar-notification/SnackBarNotification"

let CartComponent = (props) => {

    const username = useSelector((state) => state.userReducer.user.userName)

    const cart = useSelector((state) => state.cartReducer)

    console.log("My cart ", cart)
    React.useEffect(() => {
        console.log("I'm mounted");

    }, [])

    React.useEffect(() => {
        getUserCart(username);
        console.log("username", username)
    }, [username])

    const dispatch = useDispatch();

    const [showCart, setshowCart] = useState(true)

    const goToCheckOut = () => {
        setshowCart(!showCart)
    }

    let totalItem = 0
    let total = 0
    for (let value of cart) {
        totalItem += value.quantity
        total += value.quantity * value.price
    }

    const saveCart = async () => {
        let orderArray = []
        for (let i = 0; i < cart.length; i++) {

            let order = cart[i]
            orderArray.push(order)
        }
        let cartObject = {
            userName: username,
            cart: orderArray
        }
        console.log(cartObject)
        const api = "http://localhost:9090/user/api/saveUserCart";

        const response = await fetch(api, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartObject)
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        console.log(response)
    }

    const getUserCart = async (username) => {

        // Base case
        if (!!cart && cart.length != 0) {
            return;
        }

        const api = `http://localhost:9090/user/api/getUserCart?userName=${username}`;

        const response = await fetch(api, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)

        console.log("my response", response.cart)
        console.log(response.cart.length)
        for (let i = 0; i < response.cart.length; i++) {
            dispatch(addProductToCart(response.cart[i]))
        }
    }

    // this is for the snack bar to pop up when a product is added by using button add to cart
    const [state, setState] = React.useState({
        open: false,
        vertical: "top",
        horizontal: "center",
        message: "",
        id: ""
    });


    const handleClick = (newState) => () => {
        // let id = props.product._id
        console.log("newState",newState.id)
        const id = newState.id
        dispatch(removeItemFromCart(id))
        setState({ open: true, ...newState });
    };

    //this is to remove product from cart
   

    const handleCloseSnackBar = () => {
        setState({ ...state, open: false });
    };

    const CLASS_PREFIX = "CartComponent__";

    return (
        <Fragment>
            <div className={`${CLASS_PREFIX}root`}>
                {showCart ?
                    <Fragment>
                        {cart.length < 1 ?
                            <p></p>
                            :
                            (<div>
                                <table className={`${CLASS_PREFIX}table`}>
                                    <tbody>
                                        <tr>
                                            <th> Item </th>
                                            <th> Price</th>
                                            <th> Desc</th>
                                            <th> Rating</th>
                                            <th> Qty</th>
                                            <th> SubTotal</th>
                                            <th>    </th>
                                        </tr>
                                        {cart.map(product => {
                                            return <CartItem
                                                key={product._id}
                                                product={product}
                                                // state={state}
                                                handleClick={handleClick}
                                                // handleCloseSnackBar={handleCloseSnackBar}
                                            />
                                        })}
                                        <td style={{ marginRight: "10px" }}>
                                            <Button variant="contained" color="outlined" style={{ marginRight: "10px" }} onClick={saveCart} >
                                                Save Cart
                                        </Button>
                                            <Button variant="contained" color="outlined" onClick={goToCheckOut}>
                                                Check out
                                        </Button>
                                        </td>
                                    </tbody>
                                </table>

                            </div>)
                        }
                    </Fragment>
                    :
                    <CheckOut total={total} totalItem={totalItem} />

                }
                <SnackBarNotification
                    state={state}
                    handleCloseSnackBar={handleCloseSnackBar}
                />
            </div>
        </Fragment>
    )
}

export default CartComponent;