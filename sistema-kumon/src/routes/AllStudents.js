import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Row, Col, Button } from "antd";

import StudentRow from "../components/StudentRow";
import { getStudents } from "../controllers/StudentsController";

class AllStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.populateStudents();
  }

  async populateStudents() {
    const students = await getStudents();
    let newState = students.map(student => {
      return {
        identifier: student.identifier,
        name: `${student.name} ${student.last_name_father} ${student.last_name_mother}`,
        paymentDue: student.next_payment_date
      };
    });

    this.setState({ students: newState });
  }

  render() {
    let students = this.state.students.map((student, index) => {
      return (
        <StudentRow
          key={student.identifier}
          studentId={student.id}
          identifier={student.identifier}
          name={student.name}
          paymentDue={student.paymentDue}
          index={index}
        />
      );
    });

    return (
      <div>
        <header>
          <h1>Alumnos inscritos</h1>
        </header>
        <Button>
          <Link to="/students/new">Registrar Alumno nuevo</Link>
        </Button>
        <Row>
          <Col xs={{ span: 18, push: 3 }}>
            <div className="studentList">{students}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllStudents;
