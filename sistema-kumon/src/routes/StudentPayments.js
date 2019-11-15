import React from "react";
import "../App.css";
import { Button, Icon, Input, message } from "antd";
import PaymentRow from "../components/PaymentRow";
import { getNextPayment, payMonth } from "../controllers/StudentsController";

class StudentPayments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifier: "",
      name: null,
      payment: null,
      payments: null,
      payEnable: false
    };

    this.handleGetPayments = this.handleGetPayments.bind(this);
    this.handlePay = this.handlePay.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value
    });
  }

  paySuccess = () => {
    message.success("El pago fue exitoso");
  };

  payFailure = () => {
    message.error("Hubo un error con el pago");
  };

  async handleGetPayments() {
    let payment = await getNextPayment(this.state.identifier);
    if (payment) {
      this.setState({
        ...this.state,
        payment: payment.next_payment_date,
        payments: payment.payments,
        payEnable: true
      });
    }
  }

  async handlePay() {
    let pay = await payMonth(this.state.identifier);
    if (pay) {
      this.paySuccess();
    } else {
      this.payFailure();
    }
  }

  render() {
    let display = null;
    let paymentsView = null;
    let title = "";
    title = "Pagos";

    display = (
      <div>
        <Input
          style={{ margin: "15px" }}
          size="large"
          placeholder="Matricula"
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          onChange={event =>
            this.handleChange("identifier", event.target.value)
          }
        />
        <Button size="large" onClick={this.handleGetPayments}>
          Buscar pagos
        </Button>
      </div>
    );

    let numberToMonth = {
      1: 'Enero',
      2: 'Febrero',
      3: 'Marzo',
      4: 'Abril',
      5: 'Mayo',
      6: 'Junio',
      7: 'Julio',
      8: 'Agosto',
      9: 'Septiembre',
      10: 'Octubre',
      11: 'Noviembre',
      12: 'Diciembre',
    }

    paymentsView = (
      <div>
        <h1>Historial de Pagos</h1>
        {this.state.payments && this.state.payments.map((payment) => (
          <PaymentRow title={`Pago de ${numberToMonth[payment.month]} - `} paymentDue={payment.created_at} />
        ))}
      </div>
    );

    let duePayment = <PaymentRow title={'Proximo pago: '} paymentDue={this.state.payment} />;

    let payButton = (
      <Button
        disabled={this.state.payEnable ? false : true}
        size="large"
        onClick={this.handlePay}
      >
        Pagar
      </Button>
    );

    return (
      <div className="Mark-Attendance">
        <header className="Mark-Attendance-header">
          <h1>{title}</h1>
        </header>
        {display}
        {this.state.payment != null ? duePayment : null}
        <br></br>
        {payButton}
        {this.state.payments && paymentsView}
      </div>
    );
  }
}

export default StudentPayments;
