import React from 'react';
import '../App.css';
import Input from './Input'

function PasswordInput({name}) {
  return (
    < Input type="password" name={name} />
  );
}

export default PasswordInput;
