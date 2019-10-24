import React from "react";
import "../App.css";

import { useParams } from "react-router-dom";
import { getStudent } from "../controllers/StudentsController";

class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    let studentId = props.match.params.studentId;

    this.state = {
      studentId: studentId,
      student: {}
    };
  }

  async componentDidMount() {
    const student = getStudent(this.state.studentId);
  }

  render() {
    return (
      <p>{this.state.studentId}</p>
    );
  }
}

export default StudentInfo;
