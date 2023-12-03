import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add more robust authentication logic here
    // For simplicity, let's assume a successful login for any non-empty username and password
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username);
    }
  };

  return (
    <div className='new' style={{border:'bold',padding:'20px'}}>
      <h2 style={{textAlign:'center', padding:'20px'}}>Login Page</h2>
      <label >
        Username:
        <input  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button style={{backgroundColor:'rgb',alignItems:'center',display:'flex',alignItems:'center',marginLeft:'50px',marginTop:'20px',width:'80px'}} className='btn' onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;