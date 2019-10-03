import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

class StudentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "name": "",
      "lastname_first": "",
      "lastname_second": "",
      "school": "",
      "tutor_name": "",
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
    return (
      <div className="Login">
        <header className="Login-header">
          <h1>Registrar Alumno</h1>
        </header>
        <TextInput
          name="Nombre/s"
          value={this.state.name}
          changeHandler={(event) => this.handleChange("name", event.target.value)}
        />
        <TextInput
          name="Apellido Paterno"
          value={this.state.lastname_first}
          changeHandler={(event) => this.handleChange("lastname_first", event.target.value)}
        />
        <TextInput
          name="Apellido Materno"
          value={this.state.lastname_second}
          changeHandler={(event) => this.handleChange("lastname_second", event.target.value)}
        />
        <TextInput
          name="Escuela"
          value={this.state.school}
          changeHandler={(event) => this.handleChange("school", event.target.value)}
        />
        <h2>Datos del tutor</h2>
        <TextInput
          name="Nombre completo"
          value={this.state.tutor_name}
          changeHandler={(event) => this.handleChange("tutor_name", event.target.value)}
        />
        <button onClick={this.handleSubmit}>Registrar</button>
      </div>
    );
  }
}

export default StudentForm;
