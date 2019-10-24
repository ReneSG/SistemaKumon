import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["emergency_contact_name", "Nombre", TextInput],
    ["emergency_contact_phone", "Telefono", TextInput],
    ["emergency_contact_cellphone", "Celular", TextInput],
];


class EmergencyContactForm extends React.Component {
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
          <h2>Contacto de Emergencia</h2>
        </header>
        {inputs}
      </div>
    );
  }
}

export default EmergencyContactForm;
