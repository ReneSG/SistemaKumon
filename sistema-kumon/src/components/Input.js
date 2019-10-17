import React from 'react';
import '../App.css';

import { Form } from 'antd';

function FormInput({name, children}) {
  return (
    <Form.Item label={name}>
      {children}
    </Form.Item>
  );
}

export default FormInput;
