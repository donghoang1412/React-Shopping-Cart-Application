import React, {Component, Fragment} from "react";
import Dong from "./DongComponent";
import ChoMinh from "./ChoMinhComponent";
export default class App extends React.Component {
    constructor(props, context){
        super(props)

        this.state ={
            user:{
                name: "DONG",
                age: 25,
                address:"WallStreet"
            }
        }
    }
    callBackFromChild = (name)=>{
        // alert("Name is update by child component")        

        if(name !== this.state.user.name){
            this.setState({ // its going to replace the original state user object with the new name
                user:{
                    // Spread operator
                    ...this.state.user, //copy everything from previous state of user
                    name : name // update the name in this state with value from child
                }                    
            });
        }        
    }


    textChange = (event) => {
        //an event is raised whenever user types in text box i.e. change event
        let target = event.target;
        //debugger;

        this.setState({
            user:{
                ...this.state.user,
                name : target.value
            }
        });
    }
    
    render(){
        console.log("AppCOmponent render")
        return(
            <Fragment>
                <input type="text" value={this.state.user.name} onChange={this.textChange} />
                <Dong user={this.state.user} callbackFun = {this.callBackFromChild} />                
                <ChoMinh username = "Dong" />
                          
            </Fragment>
        )
    }
}
