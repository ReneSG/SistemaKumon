import React from 'react';
import '../App.css';
import Input from './Input'

function PasswordInput({name, value, changeHandler}) {
  return (
    < Input type="password" name={name} value={value} changeHandler={changeHandler}/>
  );
}

export default PasswordInput;
