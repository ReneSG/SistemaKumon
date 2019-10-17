import React from 'react';
import '../App.css';

import { Form } from 'antd';

function FormInput({name, value, changeHandler, children}) {
  return (
    <Form.Item label={name}>
      {children}
    </Form.Item>
  );
}

// <div className="TextInput">
//   <label htmlFor={name}>{name}</label>
//   <input id={name} type={type} value={value} onChange={changeHandler}></input>
// </div>

export default FormInput;
