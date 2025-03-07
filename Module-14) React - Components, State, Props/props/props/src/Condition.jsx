import React, { useState } from 'react'

function Condition() {
    let [islogin, setIslogin] = useState(false);
    let [age, setAge] = useState("");

    let handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <h2>{islogin ? "Welcome to home page" : "Please Login"}</h2>
            <button onClick={() => setIslogin(!islogin)}> {islogin ? "Logout" : "login"}</button>
            <br></br>
            <h2>Check Voting Eligibility</h2>
            <input type="number" placeholder='enter your age' value={age}  min={1} max={100}onChange={handleChange}  />
            {/* <button onSubmit={handleSubmit}>Submit</button> */}
            <p> { age >= 18 ? "✅ You are eligible to vote!"
                : "❌ You are not eligible to vote."} </p>
        </div>
    );

}


export default Condition