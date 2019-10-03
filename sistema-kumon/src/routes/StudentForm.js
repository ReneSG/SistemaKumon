import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'
import AddressForm from '../components/AddressForm'
import EmergencyContactForm from '../components/EmergencyContactForm'
import GuardiansForm from '../components/GuardiansForm'

import { handleRegister } from '../controllers/RegistrationController'

const attributes = [
  ["name", "Nombre/s"],
  ["last_name_father", "Apellido paterno"],
  ["last_name_mother", "Apellido materno"],
  ["identifier", "Matricula"],
  ["date_of_birth", "Fecha de nacimiento"],
  ["gender", "Genero"],
  ["phone", "Telefono"],
  ["medical_instructions", "Cuestiones médicas"],
];


class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "last_name_father": "",
      "last_name_mother": "",
      "identifier": "",
      "date_of_birth": "",
      "gender": "",
      "phone": "",
      "medical_instructions": "",
      "school_attributes": {},
      "address_attributes": {},
      "emergency_contact_attributes": {},
      "guardians_attributes": [],
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
    handleRegister(
      this.state.name,
      this.state.last_name_father,
      this.state.last_name_mother,
      this.state.identifier,
      this.state.date_of_birth,
      this.state.gender,
      this.state.phone,
      this.state.medical_instructions,
      this.state.school_attributes,
      this.state.address_attributes,
      this.state.emergency_contact_attributes,
      this.state.guardians_attributes,
    ).then((response) => {
      console.log(response);
    });
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
      <div className="Login">
        <header className="Login-header">
          <h1>Registrar Alumno</h1>
        </header>
        {inputs}
        <GuardiansForm 
          handleChange={this.handleChange}
          stateKey="guardians_attributes"
        />
        <AddressForm
          handleChange={this.handleChange}
          stateKey="address_attributes"
        />
        <EmergencyContactForm
          handleChange={this.handleChange}
          stateKey="emergency_contact_attributes"
        />
        <button onClick={this.handleSubmit}>Registrar</button>
      </div>
    );
  }
}

export default StudentForm;
