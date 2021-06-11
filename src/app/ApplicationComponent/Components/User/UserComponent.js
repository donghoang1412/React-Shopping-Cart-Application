import React, { Component, F } from "react";
import {Button} from "@material-ui/core";

import './UserComponent.css';

export default class User extends Component {
    
    constructor(props, context) {
        super(props, context);

        //debugger;
        this.state = {
            userName: props.user.userName,
            password : props.user.password,
            street : props.user.street,
            mobile : props.user.mobile
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("next props", nextProps);
        
        this.setState({
            userName: nextProps.user.userName,
            password: nextProps.user.password,
            street: nextProps.user.street,
            mobile: nextProps.user.mobile,
            _id: nextProps.user._id
        })
    }

    onTextChange = (event)=>{
        let target = event.target; // the target html elment over which onchange event is raised (user changes text)
        let value = target.value; // the value that it contains after change
        let classList = target.classList; // the css classes present in the textbox

        if (classList.contains("username")) { // identifying element on the basis of css class
            this.setState({
                userName : value
            })    
        }if (classList.contains("pass")) {
            this.setState({
                password : value
            })
        } else if(classList.contains("street")){
            this.setState({
                street: value
            })
        } else if (classList.contains("mobile") && value && value.length <= 11) {
            this.setState({
                mobile: value
            })    
        }
    }

    // onPassTextChange = (event)=>{
    //     let target = event.target;
    //     let value = target.value;

    //     this.setState({
    //         password : value
    //     })
    // }

    loginUser = ()=>{
        this.props.loginUser(this.state);
        //alert("user "+ JSON.stringify(this.state))
    }



    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>User Name</b>
                        <input type="text" className="form-control col-md-6 username" value={this.state.userName} 
                            placeholder="User Name" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                        <b>Password</b>
                        <input type="password" className="form-control col-md-6 pass" value={this.state.password} 
                            placeholder="Password" onChange={this.onTextChange} maxLength={40}/>
                    </div>

                    <div className="col-md-12">
                        <b>Street </b>
                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                          placeholder="Street Name"
                          onChange={this.onTextChange} />
                    </div>
                    
                    <div className="col-md-12">
                        <b>Mobile </b>
                        <input type="number" className="form-control col-md-6 mobile" value={this.state.mobile} 
                            placeholder="Mobile" maxLength="11"
                            onChange={this.onTextChange} />
                    </div>
                    {/* {this.props.user._id} */}

                    {/* <input type="button" className={"btn btn-primary col-md-2 saveUser"} value={"SignIn-Up"} onClick={this.loginUser}/> */}
                    <Button variant="contained" color="outlined" className="UserComponent__save-user" onClick={this.loginUser}>
                        SignIn-Up
                    </Button>
                </div>
            </section>
        )
    }

}