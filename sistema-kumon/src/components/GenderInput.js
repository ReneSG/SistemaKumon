import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Select } from 'antd';

const { Option } = Select;

function GenderInput({fieldKey, name, value, getFieldDecorator}) {
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
      })(
        <Select>
          <Option value={0}>Masculino</Option>
          <Option value={1}>Femenino</Option>
        </Select>
      )}
    </FormInput>
  );
}

export default GenderInput;
