import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const currentUser = localStorage.getItem('currentUser');
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserData = users.find((u) => u.username === currentUser);
    if (currentUserData) {
      setUser(currentUserData);
      setUsername(currentUserData.username);
      setPassword(currentUserData.password);
      setProfilePicture(currentUserData.profilePicture);
    }
  }, [currentUser]);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => {
      if (u.username === currentUser) {
        return { ...u, username, password, profilePicture };
      }
      return u;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('currentUser', username);
    setUser({ username, password, profilePicture });
  };

  return (
    <div style={styles.profileContainer}>
      <h2>Profile</h2>
      {profilePicture && <img style={styles.profilePicture} src={profilePicture} alt="Profile" />}
      <form style={styles.profileForm} onSubmit={handleUpdateProfile}>
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
        <button style={styles.button} type="submit">Update Profile</button>
      </form>
    </div>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px'
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px'
  },
  profileForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
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
  }
};

export default ProfilePage;
