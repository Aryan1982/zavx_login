import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const baseURL = 'http://localhost:8000'; // Specify your API base URL here

  const handleLogin = () => {
    // Make API call to login endpoint
    axios.post(`${baseURL}/login`, { username, password })
      .then(response => {
        // Successful login
        alert('Login successful!');
      })
      .catch(error => {
        // Failed login
        setError('Invalid username or password');
      });
  };

  return (
    <div className="container">
    <div className="overlay"></div>
        <div className="form-container">
        <h1>Log In</h1>
        <div className="form-group">
            {/* <label>Username:</label> */}
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Email'
            />
        </div>
        <div className="form-group">
            {/* <label>Password:</label> */}
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="btn" onClick={handleLogin}>Login</button>
        <p className='note'>( Note: Login with your account registered with Zavx )</p>
        <div className='footer'>

            <h1 className='logo'>ZAVX</h1>
            <h2 className='tagline'>#aestheticizing technology</h2>
        </div>
        </div>
    </div>
  );
};

export default LoginPage;
