import React from 'react'

function Card(props) {
    return (
        <div className='comcard'>
            <h2>Company Card</h2>
            <hr></hr>
            <h2>name :{props.name}</h2>
            <h2>Age :{props.age}</h2>
            <h2>Locatain :{props.Locatain}</h2>
            
        </div>
    );
}

export default Card