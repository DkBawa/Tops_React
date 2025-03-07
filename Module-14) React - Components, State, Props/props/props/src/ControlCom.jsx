import React, { useState } from 'react'

function ControlCom() {
    let [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });
    let [submittedData, setSubmittedData] = useState(null);

    let handleChange = (event) => {
        let { name, value } = event.target;
        setData({
            ...data, // keep privius value
            [name]: value // update the changed input field
        });
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedData(data); // Store data on submit
      };

    return (

        <form onSubmit={handleSubmit}>
            <h3>User Deatil Card</h3>
            <label>
                name : <input type="text" name="name" placeholder='enter your Name' value={data.name} onChange={handleChange} /> <br></br>
            </label>
            <label>
                email : <input type="email" name="email" placeholder='enter your email' value={data.email} onChange={handleChange} /><br></br>
            </label>
            <label>
                password : <input type="password" name="password" placeholder='enter your password' value={data.password} onChange={handleChange} /><br></br>
            </label>
            <button type="submit">Submit</button>
            {submittedData && (
            <div className='card' style={{  border: "2px solid black", width: "200px", padding: "10px", marginTop: "10px" }}>
            <p>Name : {submittedData.name}</p>
            <p>Email : {submittedData.email}</p>
            <p>Password : {submittedData.password}</p>
            </div>
            )}
        </form>
    );
}

export default ControlCom