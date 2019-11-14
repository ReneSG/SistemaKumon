import React from "react";
import "../App.css";

import { notification } from 'antd';

import { getStudent } from "../controllers/StudentsController";
import StudentForm from "./StudentForm";

class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      studentId: this.props.studentId,
      student: {}
    };
  }

  async componentDidMount() {
    let student = await getStudent(this.state.studentId);
    if(student) {
      student.guardian = student.guardians[0];
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
    console.log(this.state.student);
    return (
      <StudentForm 
        {...this.state.student}
      />
    );
  }
}

export default StudentInfo;
