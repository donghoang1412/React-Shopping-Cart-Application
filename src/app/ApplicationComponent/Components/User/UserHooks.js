//This is a hook based functional component, which we can use to replace with container based User
import React, {useRef, useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addUserToStore, siginUpuser} from "../../../State/User/UserActions";

let User = (props)=>{
    //let userName = props.user.userName; //reading from userReducer
    const inputUserName = useRef(null)
    const inputPassword = useRef(null);
    const inputStreet = useRef(null);
    const inputMobile = useRef(null);

    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    const dispatchUser = useDispatch();

    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (map State to Props)
    const user = useSelector((state)=>state.userReducer.user)
    
    // replacemnet of shouldComponentUpdate
    useEffect(()=>{
        inputUserName.current.value = user.userName;
        inputPassword.current.value = user.password;
        inputStreet.current.value = user.street;
        inputMobile.current.value = user.mobile;
    })
    
    //debugger;
    const onButtonClick = (event) => {
        // `current` points to the mounted text input element
        //inputEl.current.focus();
        let userObj = {
            userName : inputUserName.current.value,
            password : inputPassword.current.value,
            street : inputStreet.current.value,
            mobile : inputMobile.current.value,
        }
        //alert("User Object :" + JSON.stringify(userObj))
        //dispatchUser(addUserToStore(userObj));
        dispatchUser(siginUpuser(userObj));
        event.preventDefault();
    };
    return(
        <React.Fragment>
            <h1>User Component Hooks</h1>
            {/* controlled Component implementation using ref keyword */}
            <form className={"form col-md-10"}  onSubmit={onButtonClick}>
                <label>
                    <b>User Name :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputUserName} 
                            placeholder="Please enter user name" />
                </label>
                <br/>
                <label>
                    <b>Password :</b>
                    <input type="password" className={"form-control col-md-12"} ref={inputPassword} placeholder="Please enter password"/>
                </label>
                <br/>
                <label>
                    <b>Street :</b>
                    <input type="text" className={"form-control col-md-12"} ref={inputStreet} placeholder="Please enter address"/>
                </label>
                <br/>
                <label>
                    <b>Mobile :</b>
                    <input type="number" className={"form-control col-md-12"} ref={inputMobile} placeholder="Please enter mobile" maxLength="11"/>
                </label>

                <br/>
                <input type="submit" className={"btn btn-primary"} value="Signin" />
            </form>
        </React.Fragment>)
}

export default User;