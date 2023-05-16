function FunctionEvent(){
    function handleClick(){
        console.log("button is clicked");
    }

    //alternatively heres how u do with arrow function
    const handleClick2 = () => {
        console.log("Button clicked with arrow function")
    }

    
    return(
        <div>
            Functional Component
            <button onClick={handleClick}>Click Here :D</button>
            <button onClick={handleClick2}>No click Here :v</button>
        </div>
    ); //dont put parenthesis in on click event
}

export default FunctionEvent;