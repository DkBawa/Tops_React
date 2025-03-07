import React, { useState, useEffect } from 'react'

function UseEffect() {
    let [count, setCount] = useState(35);

    useEffect(() => {
        console.log("Component Mount");

        return () => {
            console.log("COmponet ummount");
        };
    }, []);

    return (
        <div style={{ border: "2px solid black", width: "200px", padding: "10px", marginTop: "10px" }}>UseEffect
            <h2>Count : {count}</h2>
        </div>
    )
}

export default UseEffect