import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });
  const apiUrl = 'http://localhost:3001/users';

  // Fetch Users (GET)
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Form Input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add User (POST)
  const addUser = async () => {
    try {
      const response = await axios.post(apiUrl, form);
      setUsers([...users, response.data]);
      setForm({ name: '', email: '' });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update User (PUT)
  const updateUser = async (id) => {
    try {
      const updatedUser = { ...form, id };
      await axios.put(`${apiUrl}/${id}`, updatedUser);
      fetchUsers();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Partial Update (PATCH)
  const patchUser = async (id) => {
    try {
      await axios.patch(`${apiUrl}/${id}`, { name: form.name });
      fetchUsers();
    } catch (error) {
      console.error('Error patching user:', error);
    }
  };

  // Delete User (DELETE)
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>CRUD with JSON Server</h1>

      {/* Form */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <button onClick={addUser}>Add User</button>

      {/* User Table */}
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateUser(user.id)}>Update</button>
                <button onClick={() => patchUser(user.id)}>Patch</button>
                <button onClick={() => deleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
