import React from 'react';
import '../App.css';

function Input({type, name, changeHandler}) {
  return (
    <div className="TextInput">
      <label htmlFor={name}>{name}</label>
      <input id={name} type={type} onChange={changeHandler}></input>
    </div>
  );
}

export default Input;
