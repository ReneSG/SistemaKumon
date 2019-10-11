import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import "./App.css";

import Login from "./routes/Login";
import StudentForm from "./routes/StudentForm";
import AllStudents from "./routes/AllStudents";
import MarkAttendance from "./routes/MarkAttendance";
import PrivateRoute from "./components/PrivateRoute";
import { AUTHENTICATED, TOKEN } from './constants/sessionstorage';

function App() {
  const logout = () => {
    sessionStorage.removeItem(AUTHENTICATED);
    sessionStorage.removeItem(TOKEN)
  }

  return (
    <Router>
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
              <Link to="/students">Lista de alumnos</Link>
            </li>
            <li>
              <Link to="/student/mark_attendance">Asistencia</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/students/new">
            <StudentForm />
          </PrivateRoute>
          <PrivateRoute path="/student/mark_attendance">
            <MarkAttendance />
          </PrivateRoute>
          <PrivateRoute exact path="/students/">
            <AllStudents />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
