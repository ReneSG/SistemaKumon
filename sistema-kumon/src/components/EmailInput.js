import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Input } from 'antd';

function EmailInput({fieldKey, name, value, getFieldDecorator}) {
  return (
    <FormInput name={name}>
      {getFieldDecorator(fieldKey, {
        rules: [
          {
            type: 'email',
            message: 'Correo inválido!',
          },
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

export default EmailInput;
