import { useState } from "react";

export default function ConditionalComponent(){

    const [display,setDisplay] = useState(true);

    //let output;

    //if u wanna use ternary instead of normal
    return display ? (<div>evals to true</div>) : (<div>evals to false</div>);

    /*
    if(display){
        output = <h3>This is a conditional compi</h3>
    }else{
        output = <h3>Nothing to see here teehee</h3>
    }

    return <div>{output}</div>
    */
}