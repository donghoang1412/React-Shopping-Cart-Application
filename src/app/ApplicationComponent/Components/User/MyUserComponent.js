//This is a hook based functional component, which we can use to replace with container based User
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addUserToStore,
    setLoginAsSuccess,
} from "../../../State/User/UserActions";
import TextField from '@material-ui/core/TextField';
import { Button, unsupportedProp } from "@material-ui/core";
import { NavLink , useHistory} from "react-router-dom"
let User = (props) => {
    // this hook is used to replace map dispatch to props so that we are able to 
    // make our functional component publish the new data
    const dispatchUser = useDispatch();
    const history =  useHistory();
    // to make our component subscribe to the store we need to use - useSelector and then
    // select the state with which we want to map our data (map State to Props)
    const user = useSelector((state) => state.userReducer.user)


    console.log("My fucking User: ", user)

    const [username, setUsername] = useState("Name")
    const [password, setPassword] = useState("")

    React.useEffect(() => {
        setUsername(user.userName);
    }, [user])

    const setUN = (e) => {
        setUsername(e.target.value)
    }
    const setPW = (e) => {
        setPassword(e.target.value)
    }

    const [loginSuccess, setLoginSuccess] = useState(undefined);

    React.useEffect(() => {
        if (sessionStorage.getItem("signInSuccess") === false) {
            checkIfUserLogOut()
        }
    }, [])

    const checkIfUserLogOut = () => {
        setLoginSuccess(undefined)
    }

    const onButtonClick = async (event) => {
        event.preventDefault();

        const api = "http://localhost:9090/user/api/signInUser?userName=" + username + "&password=" + password;

        const response = await fetch(api, {
            method: "GET"
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        /* 
            const response = {
                "succeeded": true,
                "user": {
                    "userName": "Dong",
                    "password": "Hoang"
                }
            }
        */
        if (response.succeeded) {
            setLoginSuccess(true);

            // dispatch user object into store
            const responseUser = response.user;
            dispatchUser(addUserToStore(responseUser));
            dispatchUser(setLoginAsSuccess());
            sessionStorage.setItem('user', JSON.stringify(responseUser))
            history.push("/product")
        } else {
            setLoginSuccess(false);
        }
        
    };
    return (
        <React.Fragment>
            {/* controlled Component implementation using ref keyword */}
            <form className="UserComponent__form"
                style={{ margin: "5%", width: "40%", border: "groove", borderRadius: "10px", padding: "20px" }}
                onSubmit={onButtonClick}>

                <TextField
                    label="UserName"
                    // defaultValue="Name"
                    variant="outlined"
                    margin="normal"
                    onChange={setUN}
                    value={username}
                />
                <br />
                <TextField
                    label="Password"
                    // defaultValue="password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    onChange={setPW}
                    value={password}
                />
                <br />
                <Button type="submit" variant="contained" color="outlined" > Sign In </Button>
                <br />
                {/* {user.userName != "Name" ?
                 <div style={{color:"green"}}> Login Succefully</div>
                : <div> {clicked ? <div style={{color:"red"}}> Login Failed</div> : <div> </div>}</div>} */}

                {loginSuccess === undefined ?
                    "" :
                    (
                        <>
                            {loginSuccess ?
                                (
                                    <div style={{ color: "green" }}> Login Succefully</div>
                                ) :
                                (
                                    <div style={{ color: "red" }}> Login Failed</div>
                                )
                            }
                        </>
                    )
                }

                <NavLink to="/signUp" className="UserComponent__signUp"> <u>Don't have an account yet? Sign Up</u></NavLink>

            </form>
        </React.Fragment>)
}

export default User;