import React, { useState } from 'react';

import { Button, Input } from '@mui/material';
// import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique de connexion
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login">
      <h1>Connexion</h1>
      <form>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <Input
          label="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="login-input"
        />
        <Button onClick={handleLogin} className="login-button">
          Connexion
        </Button>
      </form>
    </div>
  );
};

export default Login;
