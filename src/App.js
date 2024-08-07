import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Register from './Register';
import TechnicianDashboard from './Techniciandashboard';
import UserDashboard from './Userdashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/technician" element={<TechnicianDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
