import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      if (res.data.success) {
        setMessage('Login successful!');
        alert('Login successful!');
      } else {
        setMessage('Login failed. Try again.');
      }
    } catch (err) {
      setMessage('Login failed. Invalid credentials.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label><br />
        <input value={username} onChange={(e) => setUsername(e.target.value)} /><br />
        <label>Password:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
