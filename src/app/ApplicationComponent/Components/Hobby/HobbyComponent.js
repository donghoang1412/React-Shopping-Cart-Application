import React, { Component} from "react";
export default class Hobby extends Component {
    
    constructor(props, context) {
        super(props, context)
        this.state = {
           name: props.hobby.name,
        }
    }
    onTextChange = (event)=>{
      this.setState({
          name : event.target.value
      })    
    }
    addHobby = ()=>{
        this.props.addHobby(this.state);
    }
    saveHobby = ()=>{
        this.props.saveHobby(this.state);
    }
    render(){
        return(
            <section className={"componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hobby Name</b>
                        <input type="text" className="form-control col-md-6 name" value={this.state.name} 
                            placeholder="Enter Hobby Name" onChange={this.onTextChange}/>
                    </div>
                    <input type="button" className={"btn btn-primary col-md-2 saveHobby"} value={"saveToAPI"} onClick={this.saveHobby}/>
                    <input type="button" className={"btn btn-primary col-md-2 addHobby"} value={"addToStore"} onClick={this.addHobby}/>
                </div>
            </section>
        )
    }
}