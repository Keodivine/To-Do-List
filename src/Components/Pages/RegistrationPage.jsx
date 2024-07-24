import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.username === username);

    if (userExists) {
      setError('Username already taken');
    } else {
      const newUser = { username, password, profilePicture };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      localStorage.setItem('currentUser', username);
      navigate('/home');
    }
  };

  return (
    <div style={styles.registrationContainer}>
      <h2>Register</h2>
      <form style={styles.registrationForm} onSubmit={handleRegister}>
        <input
          style={styles.input}
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          style={styles.input}
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
        {error && <p style={styles.errorMessage}>{error}</p>}
        <button style={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

const styles = {
  registrationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black'
    
  },
  registrationForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '100px',
    border: '1px solid gold',
    borderRadius: '5px',
    backgroundColor: 'black',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid gold',
    borderRadius: '5px'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#0056b3'
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px'
  }
};

export default RegistrationPage;
