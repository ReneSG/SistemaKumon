import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { Row, Col, Button } from "antd";

import StudentRow from "../components/StudentRow";

import { getTodayAttendance } from "../controllers/AttendancesController";

class Attendance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendances: []
    }
  }

  componentDidMount() {
    this.populateAttendanceList();
  }

  async populateAttendanceList() {
    const attendanceList = await getTodayAttendance();
    const newState = attendanceList.map(attendance => {
      const student = attendance.student;
      return {
        id: attendance.id,
        identifier: student.identifier,
        studentId: student.id,
        name: `${student.name} ${student.last_name_father} ${student.last_name_mother}`,
      }
    });

    this.setState({ attendances: newState });
  }

  render() {
    const attendances = this.state.attendances.map((attendance, index) => {
      return (
        <StudentRow
         key={attendance.identifier}
         identifier={attendance.identifier}
         studentId={attendance.studentId}
         name={attendance.name}
         index={index}
        />
      )
    });
    return (
      <div>
        <header>
          <h1>Liste de asistencia de hoy</h1>
        </header>
        <Row>
          <Col xs={{ span: 18, push: 3 }}>
            <div className="attendanceList">{attendances}</div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Attendance;
