import { Component } from "react";

class Message extends Component{
    render(){
        return <h1>
            This is a class component
            {this.props.messageContent}
        </h1>;
    }
}

export default Message;