//how to get state in functional components
import { useState } from "react";

function FunctionalCounter(){
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter+1);
    };

    return(
        <div>
            <h1>functional comp</h1>
            <div>Counter val: {counter}</div>
            <button onClick={increment}>click to increment</button>
        </div>
    );
}

export default FunctionalCounter;