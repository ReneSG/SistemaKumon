import React from 'react';
import '../App.css';

import { Form, Input, Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

class SubjectsForm extends React.Component {

  render() {
    const subjects = this.props.subjects.map(({name, id}) => {
      return {"label": name, "value": id};
    });
    return (
      <div className="Subject">
        <header className="Subject-header">
          <h2>Materias</h2>
        </header>
        <Form.Item>
          {this.props.getFieldDecorator(this.props.formKey, {
            rules: [
              {
                required: true,
                message: `Selecciona al menos una materia.`,
              }
            ],
            initialValue: []
          })(<CheckboxGroup options={subjects} onChange={this.props.updateSubjectsHandler} />
          )}
        </Form.Item>
      </div>
    );
  }
}

export default SubjectsForm;

