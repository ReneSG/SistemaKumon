import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Input } from 'antd';

function PasswordInput({name, value, changeHandler}) {
  return (
    < FormInput name={name} value={value} changeHandler={changeHandler}>
      <Input.Password />
    </FormInput>
  );
}

export default PasswordInput;
