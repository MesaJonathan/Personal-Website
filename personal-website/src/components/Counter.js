//must import for class component
import { Component } from "react";

//class component
class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };

        //this.increment = this.increment.bind(this);
    }
    
    //change value of state (props for class component)
    //difference btw arrow functions and normal ones is that arrow functions 
    //have access to "this"
    increment = () =>{
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    //button that calls state changer
    render() {
        return (
            <div>
                <h3>Count val: {this.state.counter}</h3>
                <button onClick={this.increment}>Click</button>
            </div>
        ); //for set state methods u have to use an arrow function(in jsx or declaration) or use bind
    }
}

export default Counter;