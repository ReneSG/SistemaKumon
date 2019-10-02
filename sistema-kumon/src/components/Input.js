import React from 'react';
import '../App.css';

function Input({type, name}) {
  return (
    <div className="TextInput">
      <label htmlFor={name}>{name}</label>
      <input id={name} type={type}></input>
    </div>
  );
}

export default Input;
