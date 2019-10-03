import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["name", "Nombre"],
    ["phone", "Telefono"],
    ["cellphone", "Celular"],
];


class EmergencyContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "phone": "",
      "cellphone": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {

    let inputs = attributes.map(
        ([key, value]) => {
            console.log(key, value);
            return (
                <TextInput
                    name={value}
                    value={this.state[key]}
                    changeHandler={(event) => this.handleChange(key, event.target.value)}
                />
            );
        }
    );
    console.log(inputs);
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