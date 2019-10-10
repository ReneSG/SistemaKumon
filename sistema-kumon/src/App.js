import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Login from './routes/Login'
import StudentForm from './routes/StudentForm'
import AllStudents from './routes/AllStudents'

function App() {
  return (
    <Router >
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/students/new">Nuevo alumno</Link>
            </li>
            <li>
              <Link to="/students/">Lista de alumnos</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/students/new">
            <StudentForm />
          </Route>
          <Route path="/students/">
            <AllStudents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
