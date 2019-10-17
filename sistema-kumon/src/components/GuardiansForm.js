import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'
import EmailInput from '../components/EmailInput'

const attributes = [
    ["guardian_name", "Nombre/s", TextInput],
    ["guardian_last_name_father", "Apellido paterno", TextInput],
    ["guardian_last_name_mother", "Apellido materno", TextInput],
    ["guardian_email", "Correo", EmailInput],
    ["guardian_phone", "Telefono", TextInput],
    ["guardian_job", "Trabajo", TextInput],
];


class GuardiansForm extends React.Component {
  render() {

    let inputs = attributes.map(
      ([key, value, Tag]) => {
        return (
          <Tag
            key={key}
            fieldKey={key}
            name={value}
            value={this.props[key]}
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
