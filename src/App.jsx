// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegistrationPage from './Components/Pages/RegistrationPage.jsx';
import LoginPage from './Components/Pages/index.jsx';
import HomePage from './Components/Pages/HomePage.jsx';
import ProfilePage from './Components/Pages/ProfilePage.jsx';
import CompletedTasksPage from './Components/Pages/CompletedTasksPage.jsx';
import './App.css';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<PrivateRoute element={HomePage} />} />
        <Route path="/profile" element={<PrivateRoute element={ProfilePage} />} />
        <Route path="/completed-tasks" element={<PrivateRoute element={CompletedTasksPage} />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
