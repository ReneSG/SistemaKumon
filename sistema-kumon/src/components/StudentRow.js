import React from "react";
import "../App.css";
import Moment from "react-moment";
import { DATE_FORMAT } from "../constants/dateFormat";
import "moment/locale/es";
import { Link } from "react-router-dom";

function StudentRow({ studentId, identifier, name, paymentDue, index }) {
  const getRowClass = index => {
    return "studentRow" + (index % 2 === 0 ? " evenRow" : " oddRow");
  };



  return (
    <div className={getRowClass(index)}>
      <p>
        <Link to={`/editStudent?studentId=${studentId}`}>{name}</Link>
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
