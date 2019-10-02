import React from 'react';
import '../App.css';
import Input from './Input'

function PasswordInput({name, changeHandler}) {
  return (
    < Input type="password" name={name} changeHandler={changeHandler}/>
  );
}

export default PasswordInput;
