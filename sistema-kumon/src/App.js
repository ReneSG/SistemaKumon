import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import 'antd/dist/antd.css';
import "./App.css";

import Login from "./routes/Login";
import StudentForm from "./routes/StudentForm";
import AllStudents from "./routes/AllStudents";
import MarkAttendance from "./routes/MarkAttendance";
import PrivateRoute from "./components/PrivateRoute";
import { AUTHENTICATED, TOKEN } from './constants/sessionstorage';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {sessionStorage.getItem(TOKEN) ? <Redirect to='/student' /> : <Redirect to="login" />}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/students/new">
            <AppLayout>
              <StudentForm />
            </AppLayout>
          </PrivateRoute>
          <PrivateRoute path="/student/mark_attendance">
            <AppLayout view="1">
              <MarkAttendance />
            </AppLayout>
          </PrivateRoute>
          <PrivateRoute exact path="/students/">
            <AppLayout view="0">
              <AllStudents />
            </AppLayout>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
