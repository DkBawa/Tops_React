import React, { useState, useEffect } from "react";
import { fetchUsers, addUser, updateUser, patchUser, deleteUser } from "../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", email: "" });
    const [editUser, setEditUser] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
        } catch (error) {
            toast.error("Failed to fetch users");
        }
    };

    const handleAddUser = async () => {
        try {
            const user = await addUser(newUser); 
            setUsers([...users, user]);
            setNewUser({ name: "", email: "" });
            toast.success("User added!");
        } catch {
            toast.error("Failed to add user");
        }
    };
    
      

    const handleUpdateUser = async () => {
        try {
            await updateUser(editUser.id, editUser);
            setUsers(users.map((u) => (u.id === editUser.id ? editUser : u)));
            setEditUser(null);
            toast.success("User updated!");
        } catch {
            toast.error("Failed to update user");
        }
    };

    const handlePatchUser = async (id, name) => {
        try {
            await patchUser(id, name);
            setUsers(users.map((u) => (u.id === id ? { ...u, name } : u)));
            toast.success("User name updated!");
        } catch {
            toast.error("Failed to update user name");
        }
    };

    const handleDeleteUser = async (id) => {
        try {
            await deleteUser(id);
            setUsers(users.filter((u) => u.id !== id));
            toast.success("User deleted!");
        } catch {
            toast.error("Failed to delete user");
        }
    };

    return (
        <div className="">
            <Navbar />

            <div className="d-flex justify-content-center">
                <div>
                    <h2 className="text-2xl font-bold mt-5">User Management</h2>

                    {/* Add User Form */}
                    <div className="mt-5">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            className="border p-2 mr-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            className="border p-2 mr-2"
                        />
                        <button className="bg-dark text-white p-2 " onClick={handleAddUser}>
                            Add User
                        </button>
                    </div>

                    {/* Edit User Form */}
                    {editUser && (
                        <div className="mb-4">
                            <input
                                type="text"
                                value={editUser.name}
                                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                className="border p-2 mr-2"
                            />
                            <input
                                type="email"
                                value={editUser.email}
                                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                className="border p-2 mr-2"
                            />
                            <button className="bg-green-500 text-dark p-2" onClick={handleUpdateUser}>
                                Update User
                            </button>
                            <button className="bg-gray-500 text-dark p-2 ml-2" onClick={() => setEditUser(null)}>
                                Cancel
                            </button>
                        </div>
                    )}

                    {/* User Table */}
                    <table className="table-auto w-full border-collapse border border-dark-500">
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="border p-2">ID</th>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="text-center">
                                    <td className="border p-2">{user.id}</td>
                                    <td className="border p-2">{user.name}</td>
                                    <td className="border p-2">{user.email}</td>
                                    <td className="border p-2">
                                        <button className="bg-yellow-500 text-dark p-2 mr-2" onClick={() => setEditUser(user)}>
                                            Edit
                                        </button>
                                        <button className="bg-red-500 text-dark p-2" onClick={() => handleDeleteUser(user.id)}>
                                            Delete
                                        </button>
                                        <button className="bg-purple-500 text-dark p-2 ml-2" onClick={() => handlePatchUser(user.id, prompt("Enter new name", user.name))}>
                                            Patch Name
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default UserTable;
