import { Component } from "react";


class Resume extends Component{
    render(){
        const {name} = this.props;

        return(
            <h1>
                this is the resume part
                and my name is {name}
            </h1>
        );
    }
}

export default Resume