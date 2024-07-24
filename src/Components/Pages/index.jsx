import React, { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      localStorage.setItem('isAuthenticated', true);
      window.location.href = '/home';
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <Link to="/register">
          Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
