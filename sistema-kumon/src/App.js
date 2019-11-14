import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";

import "antd/dist/antd.css";
import "./App.css";

import Login from "./routes/Login";
import StudentForm from "./routes/StudentForm";
import StudentInfo from "./routes/StudentInfo";
import AllStudents from "./routes/AllStudents";
import MarkAttendance from "./routes/MarkAttendance";
import PrivateRoute from "./components/PrivateRoute";
import { TOKEN } from "./constants/sessionstorage";
import AppLayout from "./components/AppLayout";
import StudentPayments from "./routes/StudentPayments";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RouterSwitch() {
  let query = useQuery();
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute admin path="/students/new">
          <AppLayout>
            <StudentForm purpose="Registrar estudiante"/>
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute admin path="/editStudent">
          <AppLayout>
            <StudentInfo studentId={query.get("studentId")}/>
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute admin={false} path="/student/mark_attendance">
          <AppLayout view="1">
            <MarkAttendance />
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute admin exact path="/students/">
          <AppLayout view="0">
            <AllStudents />
          </AppLayout>
        </PrivateRoute>
        <PrivateRoute admin path="/student/payments">
          <AppLayout>
            <StudentPayments />
          </AppLayout>
        </PrivateRoute>
        <Route path="/">
          {sessionStorage.getItem(TOKEN) ? (
            <Redirect to="/students" />
          ) : (
            <Redirect to="login" />
          )}
        </Route>
      </Switch>
    </div>
  );
}

function App() {
  return (
    <Router>
      <RouterSwitch />
    </Router>
  );
}

export default App;
