import React from "react";
import "../App.css";

import { notification } from 'antd';

import { getStudent } from "../controllers/StudentsController";
import StudentForm from "./StudentForm";

class StudentInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentId: this.props.studentId,
      student: {}
    };
  }

  async componentDidMount() {
    let student = await getStudent(this.state.studentId);
    if(student) {
      student.guardian = student.guardians[0];
      student.gender = student.gender === "male" ? 0 : 1;
      student.school_name = student.school.name;
    } else {
      notification.error({
        message: 'Estudiante no encontrado!',
        description:
          'El estudiante solicitado no fue encontrado en la base de datos.',
      });
    }
    this.setState({...this.state, student: student});
  }

  render() {
    return (
      <StudentForm
        purpose="Editar estudiante"
        {...this.state.student}
      />
    );
  }
}

export default StudentInfo;
