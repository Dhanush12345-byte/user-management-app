import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <UserForm selectedUser={selectedUser} refreshUsers={fetchUsers} />
      <UserList users={users} selectUser={setSelectedUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
