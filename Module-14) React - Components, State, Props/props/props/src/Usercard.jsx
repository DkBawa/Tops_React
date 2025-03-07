import React, { useState } from 'react'
import Card from './Card'
import { use } from 'react';
import Condition from './Condition';
import Listitem from './Listitem';
import Listuser from './Listuser';
import ControlCom from './ControlCom';
function Usercard() {
    let [text, setText] = useState('');
    let [newtext, setNewText] = useState(false);

    let handleToggle = () => {
        setNewText(!newtext); // toggle false

    };
    let handleChange = (event) => {
        setText(event.target.value);
    };
    let handleClick = () => {
        alert("Successfully Submit !");
    };
    return (
        <div>
            <div style={{ backgroundColor: "grey", border: "2px solid black", textAlign: "center" }}><h1>Company Employee Card</h1>
                <div className="one">
                    <Card name="Dinesh" age={30} Locatain="Udaipur" />
                    <Card name="Sachin" age={3} Locatain="jaipur" />
                    <Card name="Sehwag" age={30} Locatain="Jodhpur" />
                </div>
                <input type='text' placeholder='Type something....' onChange={handleChange} />
                <h4> comment : {text}</h4>
                <button onClick={handleClick}>Submit</button> <br></br><br></br>
                <div>
                    <h2>{newtext ? "clicked!" : "Not clicked"}</h2>
                    <button onClick={handleToggle} >Click me</button>
                </div>
                <Condition />
                <Listitem />
                <Listuser />
                <ControlCom />
            </div>
          
        </div>
    );
};

export default Usercard;