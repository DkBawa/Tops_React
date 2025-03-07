import axios from "axios";

const API_URL = "http://localhost:5000/users";

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
export const addUser = async (user) => {
    const response = await axios.get(API_URL);
    const users = response.data;
  
    const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  
    const newUser = { id: newId, ...user };
  
    const res = await axios.post(API_URL, newUser);
    return res.data;
  };
  

export const updateUser = async (id, user) => {
  const response = await axios.put(`${API_URL}/${id}`, user);
  return response.data;
};

export const patchUser = async (id, name) => {
  const response = await axios.patch(`${API_URL}/${id}`, { name });
  return response.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
