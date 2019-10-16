import React from "react";
import "../App.css";

import { handleLogin } from "../controllers/LoginController";

import { Form, Icon, Input, Button } from 'antd';

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isInvalid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginA = this.handleLoginA.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  handleLoginA() {
    handleLogin(this.state.email, this.state.password);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="backgroundLogin">
        <div className="login-container">
          <div className="logo"><img alt="Logo" style={{ width: '60%' }} className={'logo'} src={process.env.PUBLIC_URL + '/logo.png'} /></div>
          <span className='login-name'>Sistema de Administración de Alumnos Kumon</span>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Por favor ingresa tu correo!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Correo"
                  onChange={event =>
                    this.handleChange("email", event.target.value)
                  }
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Por favor ingresa tu contraseña!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Contraseña"
                  onChange={event =>
                    this.handleChange("password", event.target.value)
                  }
                />,
              )}
            </Form.Item>
            <Form.Item>
              <Button onClick={this.handleLoginA} type="primary" htmlType="submit" className="login-form-button">
                Iniciar sesión
          </Button>
            </Form.Item>
          </Form>
        </div>
      </ div>

    );
  }
}


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;
