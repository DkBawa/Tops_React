import React, { useRef, useState } from "react";

function UseRef() {
    let count = useRef(0);
    let [state, setState] = useState(0);

    let Increment = () => {
        count.current += 1;
        setState(state + 1);
        console.log("Count:", count.current); 
    };

    return (
        <div className="useref" style={{ border: "2px solid black", width: "200px", padding: "10px", marginTop: "10px", backgroundColor: "greenyellow" }}>
            <p>useRef Count : {count.current}</p>
            <p>useState count : {state}</p>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

export default UseRef