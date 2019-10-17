import React from 'react';
import '../App.css';
import FormInput from './Input'
import { Select } from 'antd';

const { Option } = Select;

function SelectInput({fieldKey, name, value, getFieldDecorator, options}) {
  let selectOptions = options.map(option => {
    return (
      <Option value={option}>{option}</Option>
    );
  });

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
          {selectOptions}
        </Select>
      )}
    </FormInput>
  );
}

export default SelectInput;
