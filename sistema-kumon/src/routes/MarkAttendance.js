import React from "react";
import "../App.css";

import { Button, Icon, Input } from 'antd';
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
        "name": `${student.name} ${student.last_name_father} ${student.last_name_mother}`,
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
          <Input
            style={{"margin": "15px"}}
            size="large"
            placeholder="Matricula"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={event =>
              this.handleChange("identifier", event.target.value)
            }
          />
          <Button
            size="large"
            onClick={this.handleSubmit}
          >
            Marcar Asistencia
          </Button>
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
