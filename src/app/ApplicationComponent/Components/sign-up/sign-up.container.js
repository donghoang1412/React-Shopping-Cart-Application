import React from 'react';
import SignUp from './sign-up.view';
//whoever import is the parent
import {useState} from  "react"
const SignUpContainer = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const setUN = (e) => {
        setUsername(e.target.value)
    }
    const setPW = (e) => {
        setPassword(e.target.value)
    }

    const[signUpSuccess, setSignUpSuccess] = useState(undefined)

    const signUpUser = async (event) => {
        event.preventDefault();
        const api = "http://localhost:9090/user/api/signUpUser?userName=" + username + "&password=" + password;
        const response = await fetch(api, {
            method: "POST",
        }).then(res => res.json())
            .then(resJson => resJson)
            .catch(err => err)
        if(response._id != null){
            setSignUpSuccess(true)
        }
        else{
            setSignUpSuccess(false)
        }
    }
    
    return(
        <SignUp 
            username={username}
            password={password}
            setUN={setUN}
            setPW={setPW}
            signUpSuccess={signUpSuccess}
            setSignUpSuccess={setSignUpSuccess}
            signUpUser={signUpUser}
        />
    )
}


export default SignUpContainer;