// src/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded credentials
    const credentials = {
      admin: { email: 'admin@example.com', password: 'admin123' },
      technician: { email: 'tech@example.com', password: 'tech123' },
      user: { email: 'user@example.com', password: 'user123' },
    };

    const userCredentials = credentials[role];
    if (email === userCredentials.email && password === userCredentials.password) {
      // Simulate token and role response
      const token = 'fake-jwt-token';
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Redirect based on role
      if (role === 'admin') history.push('/admin');
      else if (role === 'technician') history.push('/technician');
      else history.push('/user');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              className="form-control"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="technician">Technician</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <p className="text-center mt-3">
            Don’t have an account? <a href="/register">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
