import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ selectedUser, refreshUsers }) => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    if (selectedUser) setUser(selectedUser);
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedUser) {
        await axios.put(`http://localhost:5000/api/users/${selectedUser._id}`, user);
      } else {
        await axios.post('http://localhost:5000/api/users', user);
      }
      refreshUsers();
      setUser({ firstName: '', lastName: '', phoneNumber: '', email: '', address: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="phoneNumber" value={user.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="address" value={user.address} onChange={handleChange} placeholder="Address" required />
      <button type="submit">{selectedUser ? 'Update User' : 'Add User'}</button>
    </form>
  );
};

export default UserForm;
