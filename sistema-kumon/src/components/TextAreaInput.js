import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Input } from 'antd';

const { TextArea } = Input;

function TextAreaInput({fieldKey, name, value, getFieldDecorator}) {
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
      })(<TextArea rows={4} />)}
    </FormInput>
  );
}

export default TextAreaInput;
