import React, { Component } from "react";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            error: null
        };
    }

    componentDidMount() {
        console.log("Component mounted: Fetching data...");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => this.setState({ users: data, loading: false }))
            .catch(error => this.setState({ error, loading: false }));
    } 
    componentDidUpdate(prevProps, prevState) {
        console.log("Component updated!");
    }

    componentWillUnmount() {
        console.log("Component will unmount: Cleaning up...");
    }

    render() {
        const { users, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>Error: {error.message}</p>;
        }

        return (
            <div style={{ border: "2px solid black", width: "300px", padding: "10px", marginTop: "10px" }}>
                <h2>User List   "CLass Mount Component "</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>{user.name} - {user.email}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserList;