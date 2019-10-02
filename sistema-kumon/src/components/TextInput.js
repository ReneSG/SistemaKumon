import React from 'react';
import '../App.css';
import Input from './Input'

function TextInput({name, changeHandler}) {
  return (
    < Input type="text" name={name} changeHandler={changeHandler} />
  );
}

export default TextInput;
