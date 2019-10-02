import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput';

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        <h1>Login</h1>
      </header>
      <TextInput name="Correo" />
      <PasswordInput name="Contraseña" />
    </div>
  );
}

export default Login;
