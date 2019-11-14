import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["name", "emergency_contact_name", "Nombre", TextInput],
    ["phone", "emergency_contact_phone", "Telefono", TextInput],
    ["cellphone", "emergency_contact_cellphone", "Celular", TextInput],
];


class EmergencyContactForm extends React.Component {
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
          <h2>Contacto de Emergencia</h2>
        </header>
        {inputs}
      </div>
    );
  }
}

export default EmergencyContactForm;
