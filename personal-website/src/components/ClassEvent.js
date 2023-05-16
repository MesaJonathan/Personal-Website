import { Component } from 'react';

class ClassEvent extends Component{
    handleClick(){
        console.log("class based event handling")
    }
    //this is a method rather than a function

    render(){
        return(
            <div>
                This is a class based component mf
                <button onClick={this.handleClick}>OOga Booga</button>
            </div>
        ); //for class based component u have to use this. and then then event handler
    }
}

export default ClassEvent