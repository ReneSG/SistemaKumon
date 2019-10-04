import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Login from './routes/Login'
import StudentForm from './routes/StudentForm'

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
              <Link to="/students/new">Nuevo Estudiante</Link>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
