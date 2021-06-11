import React, {Component, Fragment} from "react";

let FirstModule =(props) =>{
    
    return(
        <div>
            <label> Please Enter Your Name</label><input type="text" value="Input Name"></input>
            <label> Please Enter Your Age</label><input type="text" value="Input Age"></input>  
            <label>{props.user.name}</label>
            <label>{props.user.age}</label>  
            <button onClick={() => props.callBackFun("Changed Name")} >Send Back to Parent</button>  
        </div>
    )
}

export default FirstModule;