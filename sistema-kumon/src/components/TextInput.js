import React from 'react';
import '../App.css';
import Input from './Input'

function TextInput({name, value, changeHandler}) {
  return (
    < Input type="text" name={name} value={value} changeHandler={changeHandler} />
  );
}

export default TextInput;
