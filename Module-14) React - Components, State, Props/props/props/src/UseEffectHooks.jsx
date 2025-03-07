import React, { useEffect, useState } from 'react'

function UseEffectHooks() {
    let [count, setCount] = useState(10);

    useEffect(() => {
        console.log("Component Rendering");
    }, [count]);

    return (

        <div style={{ border: "2px solid black", width: "200px", padding: "10px", marginTop: "10px" }}>   <h2>UseeffectHook</h2>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectHooks