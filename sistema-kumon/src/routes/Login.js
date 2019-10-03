import React from "react";
import axios from "axios";
import "../App.css";

import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { AUTHENTICATED } from "../constants/sessionstorage";
import { handleLogin } from "../controllers/LoginController";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isInvalid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
          <h1>Login</h1>
        </header>
        <TextInput
          name="Correo"
          changeHandler={event =>
            this.handleChange("email", event.target.value)
          }
        />
        <PasswordInput
          name="Contraseña"
          changeHandler={event =>
            this.handleChange("password", event.target.value)
          }
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
