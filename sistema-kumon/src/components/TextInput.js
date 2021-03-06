import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Input } from 'antd';

function TextInput({fieldKey, name, value, getFieldDecorator}) {
  return (
    <FormInput name={name}>
      {getFieldDecorator(fieldKey, {
        rules: [
          {
            required: true,
            message: `El campo "${name}" es obligatorio!`,
          }
        ],
        initialValue: value
      })(<Input />)}
    </FormInput>
  );
}

export default TextInput;
