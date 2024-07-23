// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import AdminDashboard from './Admindashboard';
import Register from './Register';
import TechnicianDashboard from './Techniciandashboard';
import UserDashboard from './Userdashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/technician" component={TechnicianDashboard} />
          <Route path="/userdashboard" component={UserDashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
