import React, { useState } from 'react'
import Propes from './Propes';
function Propess() {
    let [input, setInput] = useState('');
    let [submit, setSubmit] = useState([]);

    let handleInputChange = (event) => {
        setInput(event.target.value);
    };
    let handleSubmit = (event) => {
        event.preventDefault();
        setSubmit([...submit, input]);
        setInput('');
    };

    return (
        <div>
            <h1>Enter Your Name </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={input}
                    onChange={handleInputChange}
                    placeholder='Enter Your Name...' />
                <button type='submit'>Submit</button>
            </form>
         {submit.length > 0 && <Propes submit={submit} />} 
        </div>
    );
}
export default Propess;