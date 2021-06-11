import React, {Component, Fragment} from "react";
let Dong =(props) =>{
    
    return(

        <div>
            
            <h1>
                My Component
            </h1>
            <label>{props.user.name}</label>
            <hr/>
            <label>{props.user.age}</label>
            <hr/>
            <label>{props.user.address}</label>
            <hr/>
            <button onClick={() => props.callbackFun("name changed")} >Send Back to Parent</button>  
            <button >Test</button>  

        </div>
    )
}

export default Dong;
