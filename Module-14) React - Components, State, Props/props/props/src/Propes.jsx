import React from 'react'

function Propes(props) {
    return (
        <div>
            <h4>List Of names :</h4>
            <ul>
                {props.submit.map((submit, index) => (
                    <li key={index}>{submit}</li>
                ))}
            </ul>
        </div>
    );
    //   <div>
    //     <h1>Heloo ,{props.name}!</h1>
    //     <h2>Age :{props.age}</h2>
    //     <h3>Email :{props.email}</h3>
    //   </div>
}
export default Propes;