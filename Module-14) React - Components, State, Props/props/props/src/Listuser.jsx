import React, { useState } from 'react'

function Listuser() {
    let [users, setUsers] = useState([
        { id: 1, value: "" },
        { id: 2, value: "" }
    ]);

    //handle input change 
    let handleChange = (id, event) => {
        setUsers(
            users.map((user) =>
                user.id === id ? { ...user, value: event.target.value } : user
            )
        );
    };
    // nye user ko add karega 
    let addUser = () => {
        let newUser = { id: Date.now(), value: "" }; // unique id date.now
        setUsers([...users, newUser]);
    };

    // remove user 
    let removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };
    return (
        <div>
            <h2>Listuser</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <input
                        type="text"
                        value={user.value}
                        onChange={(e) => handleChange(user.id, e)}
                        placeholder='Enter User name' />
                    <button onClick={() => removeUser(user.id)}>Remove</button>
                </div>
            ))}
            <br>
            </br>
            <button onClick={addUser}>Add User</button>
        </div>

    );
}

export default Listuser;