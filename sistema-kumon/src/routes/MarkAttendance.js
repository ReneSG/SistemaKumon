import React from "react";
import "../App.css";

import TextInput from "../components/TextInput";
import { markAttendance } from "../controllers/StudentsController";
import StudentRow from "../components/StudentRow";

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}


class MarkAttendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "identifier": "",
      "name": null,
      "paymentDue": null,
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
    let student = await markAttendance(this.state.identifier);
    if (student) {
      this.setState({
        ...this.state,
        "name": `${student.first_name} ${student.last_name_father} ${student.last_name_mother}`,
        "paymentDue": student.next_payment_date,
      });

      await sleep(5000);

      this.setState({
        "identifier": "",
        "name": null,
        "paymentDue": null,
      });

    }
  }

  render() {
    let display = null;
    let title = "";
    if (this.state.name !== null) {
      title = "Bienvenido/a";
      display = (
        <StudentRow
          identifier={this.state.identifier}
          name={this.state.name}
          paymentDue={this.state.paymentDue}
        />
      );
    } else {
      title = "Asistencia";
      display = (
        <div>
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
    return (
      <div className="Mark-Attendance">
        <header className="Mark-Attendance-header">
          <h1>{title}</h1>
        </header>
        {display}
      </div>
    );
  }
}

export default MarkAttendance;
