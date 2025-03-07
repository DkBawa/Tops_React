import React, { useReducer } from "react";
import UseCallBack from "./UseCallBack";
function Reducer(state, action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };

        case "decrement":
            return { count: state.count - 1 };

        case "reset":
            return { count: 0 };
        default:
            return state;
    }
   

}
function Counter() {
    let [state, dispatch] = useReducer(Reducer, { count: 0 });
    
    let handleClick = () => {
        console.log("Button Clicked!");
      };
    return (
        
            <div style={{ border: "2px solid black", width: "200px", padding: "10px", marginTop: "10px" }}>
                <h2>  Reducer</h2>
                <h3>Count : {state.count}</h3>
                <button onClick={() => dispatch({ type: "increment" })} > + </button>
                <button onClick={() => dispatch({ type: "decrement" })} > - </button>
                <button onClick={() => dispatch({ type: "reset" })} >Reset </button>
                <button></button>
                <div>  <UseCallBack onClick={handleClick}/> </div>
        </div>
    );

}

export default Counter;