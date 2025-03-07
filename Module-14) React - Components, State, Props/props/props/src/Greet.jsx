import React, { Component, useState } from 'react'

class WelcomeMessage extends Component {
    render() {
        return <h1>Welcome to React!</h1>;
    }
}
function Greet() {
    let [input, setInput] = useState('');
    let [name, setName] = useState('');

    let handleInputChange = (event) => {
        setInput(event.target.value);
    };

    let handleSubmit = () => {
        // event.preventDefault();
        setName(input);
        setInput('');
    };
    return (
        <div>
            <WelcomeMessage />
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder='Enter Your Name...'
            />
            <button onClick={handleSubmit}>Submit</button>
            {name && <h1>Welcome ,{name}! </h1>}
        </div>
    );
}
export default Greet;