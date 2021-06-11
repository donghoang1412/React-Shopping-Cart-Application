import React, { useState } from 'react';
import './sign-up.css';
import { Button, TextField } from "@material-ui/core"
export default function SignUp(props) {
    const {
        username,
        password,
        setUN,
        setPW,
        signUpSuccess,        
        signUpUser,
    } = props;
            
    return (
        <div>
            <form className="UserComponent__form"
                style={{ margin: "5%", width: "40%", border: "groove", borderRadius: "10px", padding: "20px" }}
                onSubmit={signUpUser}
            >

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
                <Button type="submit" variant="contained" color="outlined"> Sign Up </Button>
                <br/>
                {signUpSuccess === undefined ?
                    "" :
                    (
                        <>
                            {signUpSuccess ?
                                (
                                    <div style={{ color: "green" }}> Sign up succefully</div>
                                ) :
                                (
                                    <div style={{ color: "red" }}> Username already exists! Please choose a different username </div>
                                )
                            }
                        </>
                    )
                }
            </form>
        </div>
    )
}