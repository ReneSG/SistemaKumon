import React from 'react';
import '../App.css';
import Input from './Input'

function TextInput({name}) {
  return (
    < Input type="text" name={name} />
  );
}

export default TextInput;
