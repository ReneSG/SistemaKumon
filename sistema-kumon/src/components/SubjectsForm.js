import React from 'react';
import '../App.css';

import { Form, Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;

class SubjectsForm extends React.Component {

  render() {
    const subjectOptions = this.props.subjectOptions.map(({name, id}) => {
      return {"label": name, "value": id};
    });

    var selectedOptions = []
    if(this.props.subjects) {
      selectedOptions = this.props.subjects.map(({name, id}) => {
        return {"label": name, "value": id};
      });
    }

    return (
      <div className="Subject">
      <header className="Subject-header">
      <h2>Materias</h2>
      </header>
      <Form.Item>
      {this.props.getFieldDecorator(this.props.formKey, {
        initialValue: selectedOptions.map( opt => opt && opt.value ),
        rules: [
          {
            type: 'array',
            required: true,
            message: `Selecciona al menos una materia.`,
          }
        ],
        valuePropName: 'value'
      })(<CheckboxGroup options={subjectOptions} onChange={this.props.updateSubjectsHandler} />
      )}
      </Form.Item>
      </div>
  );
  }
}

export default SubjectsForm;

