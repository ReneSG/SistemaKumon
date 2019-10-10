import React from "react";
import "../App.css";

import TextInput from "../components/TextInput";
import { markAttendance } from "../controllers/StudentsController";

class MarkAttendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  async handleSubmit() {
    let result = await markAttendance(this.state.identifier);
    console.log(result);
  }

  render() {
    return (
      <div className="Mark-Attendance">
        <header className="Mark-Attendance-header">
          <h1>Asistencia</h1>
        </header>
        <TextInput
          name="Matricula"
          changeHandler={event =>
            this.handleChange("identifier", event.target.value)
          }
        />
        <button onClick={this.handleSubmit}>Marcar Asistencia</button>
      </div>
    );
  }
}

export default MarkAttendance;
