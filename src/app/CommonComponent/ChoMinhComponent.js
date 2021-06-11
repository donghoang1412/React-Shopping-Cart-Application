import React from "react";
import App from "./AppComponent"

export default class ChoMinh extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("componentDidMount"); // Real life: call back end to get the data for the page....
    }

    /** Mostly consfusing    */
    componentWillReceiveProps(nextProps){  // Real life: Mostly getting data from Redux or Parent component.
        console.log(nextProps)
        console.log("componentwillreceive Props")
            
    }
    
    componentWillUnmount(){    // real life: clean up method prevent memory leak
        console.log("componentUnmount")
    }
    render(){
        console.log("RenderChoMinh")
        return(
            <div>
                <hr />
                {this.props.username}
                <p>Dong's task</p>
                <input type="text" placeholder="Cho Minh" />
            </div>
        )
    }
}