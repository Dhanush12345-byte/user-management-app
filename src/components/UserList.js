import React from 'react';

const UserList = ({ users, selectUser, deleteUser }) => (
  <ul>
    {users.map(user => (
      <li key={user._id}>
        <div>{user.firstName} {user.lastName}</div>
        <div>{user.phoneNumber}</div>
        <div>{user.email}</div>
        <div>{user.address}</div>
        <button onClick={() => selectUser(user)}>Edit</button>
        <button onClick={() => deleteUser(user._id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default UserList;
