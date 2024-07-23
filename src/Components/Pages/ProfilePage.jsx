// src/pages/ProfilePage.js
import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({ username: '', password: '' });

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = users.find((u) => u.username === localStorage.getItem('currentUser'));
    setUser(currentUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => (u.username === user.username ? user : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Profile updated');
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          disabled
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
