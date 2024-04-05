import React, { useState } from 'react';
import './LoginPage.css'; // Import the CSS file
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const baseURL = 'https://server.zavx.in';
  // const baseURL = 'http://localhost:4000';

  const handleLogin = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const client_id = urlParams.get('client_id');
    const redirect_uri = urlParams.get('redirect_uri');
    const state = urlParams.get('state');

    axios.post(`${baseURL}/user/alexalogin/`, { email, password }, {
      params: { client_id, redirect_uri, state },
      validateStatus: function (status) {
        return status >= 200 && status < 300; // Resolve promise for 2xx status codes
      }
    })
      .then(response => {
        if (response) {
          alert('Login successful!');
          window.location.href = response.data.data.redirect;
        } else {
        }
      })
      .catch(error => {
        setError('Invalid username or password');
      });
  };


  return (
    <div className="login-container ">
      <div className="overlay"></div>
      <div className="form-container text-center">
        <h1 className='font-bold'>Log In</h1>
        <div className="form-group">
          {/* <label>Username:</label> */}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Email'
            className='w-full'
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

          <h1 className='logo font-bold'>ZAVX</h1>
          <h2 className='tagline'>#aestheticizing technology</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
