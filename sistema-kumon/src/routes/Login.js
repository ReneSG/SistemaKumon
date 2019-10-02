import React from "react";
import axios from "axios";
import "../App.css";

import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { API_URL } from "../constants/apiurl";
import { AUTHENTICATED } from "../constants/sessionstorage";

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

  handleLogin() {
    console.log(this.state);
    var url = API_URL + "/users/sign_in";
    const reqBody = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(url, reqBody)
      .then(response => {
        var data = response.data;
        console.log(data);
        if (data.error) {
          this.setState({
            isInvalid: true
          });
          /* TO-DO: ERROR HANDLING */
        } else {
          sessionStorage.setItem(AUTHENTICATED, true);
          this.setState({
            isInvalid: false
          });
        }
      })
      .catch(error => {
        console.log(error);
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
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;
