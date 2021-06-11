import React from "react";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
    setLoginAsSuccess, addUserToStore, setLogoutAsSuccess
} from '../State/User/UserActions';
// import {Button, Nav} from "react-bootstrap"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom";
import NotificationContainer from "../CommonComponent/notificationBell/notification.container"


let Header = (props) => {

    const history = useHistory();
    const {
        user,
        signInSuccess
    } = props;

    const dispatch = useDispatch();

    React.useEffect(() => {

        checkIfUserHasAlreadySignIn();
        const loggedInUser = sessionStorage.getItem("user");
        if (!!loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          dispatch(addUserToStore(foundUser));
        }
    }, [])

    
    const checkIfUserHasAlreadySignIn = () => {

        const signInSuccessFromThePast = sessionStorage.getItem("signInSuccess");
        if(!!signInSuccessFromThePast){
            dispatch(setLoginAsSuccess());
        }  
    }


    // ComponentWill
    React.useEffect(() => {

        rememberSignInWasSuccess(props.signInSuccess);
        console.log("Triggered")
    }, [props.signInSuccess])

    const rememberSignInWasSuccess = (signInSuccess) => {
        if(signInSuccess){
            // Save it to sessionStorage
            sessionStorage.setItem("signInSuccess", true);
        }
    }

    const logoutUser = () =>{
        // sessionStorage.removeItem("user")
        // sessionStorage.setItem("signInSuccess", false)
        sessionStorage.clear();
        dispatch(setLogoutAsSuccess());
        history.push("/myuser");
    }

    return (
        <React.Fragment >

            <div style={{ borderBottom: "groove", padding: "20px" }}>

                {signInSuccess ?

                    (
                        <div style={{ marginLeft: "5%" }}>
                            
                            <a ><img src="../../images/sport.png" width="60px" height="45px" /> </a>
                            <a > Hi {user.userName}, </a>
                            <Button  color="default" style={{ marginRight: "10px",color: "white"}} onClick={logoutUser}> Sign Out</Button>
                            <Button  color="outlined"><NotificationContainer /></Button>
                            <NavLink to="/home" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Home</Button> </NavLink>
                            {/* <NavLink to="/myuser" > </NavLink> */}
                            {/* <NavLink to="/addproduct" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Add Product</Button> </NavLink> */}
                            <NavLink to="/product" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Product</Button> </NavLink>
                            <NavLink to="/cart" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Cart</Button> </NavLink>
                            <NavLink to="/about" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> About</Button> </NavLink>
                            <NavLink to="/coupon" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Coupon</Button> </NavLink>
                            <NavLink to="/displayhistory" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Order History </Button> </NavLink>
                            <NavLink to="/displaycancel" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Cancelled Order </Button> </NavLink>
                            {/* <NavLink to="/checkout-form" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> CheckOutForm</Button> </NavLink> */}

                        </div>
                    )
                    :
                    (
                        <div style={{ marginLeft: "5%" }}>
                            <a style={{ marginRight: "10%" }}><img src="../../images/sport.png" width="60px" height="45px" marginTop="100px" /> </a>
                            <NavLink to="/home" style={{ marginLeft: "10px", marginBottom: "50px" }}  > <Button variant="contained" color="outlined" > Home</Button> </NavLink>
                            <NavLink to="/myuser" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> Login</Button> </NavLink>
                            <NavLink to="/about" style={{ marginLeft: "10px" }}> <Button variant="contained" color="outlined"> About</Button> </NavLink>
                        </div>
                    )
                }
            </div>
        </React.Fragment>)
}

let mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        signInSuccess: state.userReducer.signInSuccess,
    }
}

export default connect(mapStateToProps, null)(Header);

