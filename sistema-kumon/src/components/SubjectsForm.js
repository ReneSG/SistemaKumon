import React from 'react';
import '../App.css';

import { Form, Input, Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

class SubjectsForm extends React.Component {
  onChange(checkedVal) {
    console.log(checkedVal);
  }

  render() {
    const subjects = this.props.subjects.map(({name, id}) => {
      return {"label": name, "value": id};
    });
    return (
      <div className="Subject">
        <header className="Subject-header">
          <h2>Materias</h2>
        </header>
        <Form.Item label="Nombre">
          {this.props.getFieldDecorator(this.props.formKey, {
            rules: [
              {
                required: true,
                message: `El campo "Escuela" es obligatorio!`,
              }
            ],
          })(<CheckboxGroup options={subjects} defaultValue={[]} onChange={this.onChange} />
          )}
        </Form.Item>
      </div>
    );
  }
}

export default SubjectsForm;

