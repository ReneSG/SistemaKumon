import React from "react";
import "../App.css";
import Moment from "react-moment";
import { DATE_FORMAT } from "../constants/dateFormat";
import "moment/locale/es";

function PaymentRow({ paymentDue }) {
  return (
    <div className="paymentRow">
      <span>Proximo pago: </span>
      <Moment locale={"es"} format={DATE_FORMAT}>
        {paymentDue}
      </Moment>
    </div>
  );
}

export default PaymentRow;
