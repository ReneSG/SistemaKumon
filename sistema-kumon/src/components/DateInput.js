import React from 'react';
import '../App.css';
import FormInput from './Input'
import { DatePicker } from 'antd';

function DateInput({fieldKey, name, value, getFieldDecorator}) {
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
      })(<DatePicker />)}
    </FormInput>
  );
}

export default DateInput;
