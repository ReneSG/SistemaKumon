import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'
import EmailInput from '../components/EmailInput'

const attributes = [
    ["name", "guardian_name", "Nombre/s", TextInput],
    ["last_name_father", "guardian_last_name_father", "Apellido paterno", TextInput],
    ["last_name_mother", "guardian_last_name_mother", "Apellido materno", TextInput],
    ["email", "guardian_email", "Correo", EmailInput],
    ["phone", "guardian_phone", "Telefono", TextInput],
    ["job", "guardian_job", "Trabajo", TextInput],
];


class GuardiansForm extends React.Component {
  render() {

    let inputs = attributes.map(
      ([prop_key, key, value, Tag]) => {
        return (
          <Tag
            key={key}
            fieldKey={key}
            name={value}
            value={this.props[prop_key]}
            getFieldDecorator={this.props.getFieldDecorator}
          />
        );
      }
    );
    return (
      <div className="Address">
        <header className="Address-header">
          <h2>Datos del tutor</h2>
        </header>
        {inputs}
      </div>
    );
  }
}

export default GuardiansForm;
