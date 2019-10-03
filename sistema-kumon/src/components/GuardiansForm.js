import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["name", "Nombre/s"],
    ["last_name_father", "Apellido paterno"],
    ["last_name_mother", "Apellido materno"],
    ["email", "Correo"],
    ["phone", "Telefono"],
    ["job", "Trabajo"],
];


class GuardiansForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "last_name_father": "",
      "last_name_mother": "",
      "email": "",
      "phone": "",
      "job": "",
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value,
    });
    this.props.handleChange(this.props.stateKey, this.state);
  }

  render() {

    let inputs = attributes.map(
        ([key, value]) => {
            return (
                <TextInput
                    name={value}
                    value={this.state[key]}
                    changeHandler={(event) => this.handleChange(key, event.target.value)}
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
