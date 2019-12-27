import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Select } from 'antd';

const { Option } = Select;

function GenderInput({fieldKey, name, value, getFieldDecorator, extraArgs}) {
  const defaultValue = value == null ? extraArgs.defaultValue : value;
  return (
    <FormInput name={name}>
      {getFieldDecorator(fieldKey, {
        rules: [
          {
            required: true,
            message: `El campo "${name}" es obligatorio!`,
          }
        ],
        initialValue: defaultValue
      })(
        <Select>
          <Option value={0}>{extraArgs.firstOption}</Option>
          <Option value={1}>{extraArgs.secondOption}</Option>
        </Select>
      )}
    </FormInput>
  );
}

export default GenderInput;
