import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {Count: 1}
        this.add = this.add.bind(this)
    }
    

    add(){ 
      this.setState({Count: this.state.Count + 1}) 
      
    }
    render(){
        return(
        <div>
            <h1>Counter: {this.state.Count}</h1>
            <button onClick={this.add}>Add</button>
        </div>
        )

        
    }
}

export default Counter