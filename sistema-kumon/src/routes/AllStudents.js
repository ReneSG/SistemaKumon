import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

import StudentRow from '../components/StudentRow'
import { getStudents } from '../controllers/StudentsController'

class AllStudents extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "students": [],
    }
  }

  componentDidMount() {
    this.populateStudents();
  }

  async populateStudents() {
    const students = await getStudents();
    let newState = students.map((student) => {
      return {
        "identifier": student.identifier,
        "name": `${student.name} ${student.last_name_father} ${student.last_name_mother}`,
        "paymentDue": student.next_payment_date,
      }
    });

    this.setState({ "students": newState });
  }

  render() {
    let students = this.state.students.map(
      (student) => {
        return (
          <StudentRow
            key={student.identifier}
            identifier={student.identifier}
            name={student.name}
            paymentDue={student.paymentDue}
          />
        );
      }
    );

    return (
      <div className="Login">
        <header className="Login-header">
          <h1>Alumnos inscritos</h1>
        </header>
        <Link to="/students/new">Registrar Alumno nuevo</Link>
        {students}
      </div>
    );
  }
}

export default AllStudents;
