import React from "react";
import "../App.css";
import Moment from "react-moment";
import { DATE_FORMAT } from "../constants/dateFormat";
import "moment/locale/es";

function StudentRow({ identifier, name, paymentDue, index }) {
  const getRowClass = index => {
    return "studentRow" + (index % 2 === 0 ? " evenRow" : "oddRow");
  };

  return (
    <div className={getRowClass(index)}>
      <p>
        <b>{name}</b>
      </p>
      <p>{identifier}</p>
      <span>Proximo pago: </span>
      <Moment locale={"es"} format={DATE_FORMAT}>
        {paymentDue}
      </Moment>
    </div>
  );
}

export default StudentRow;
