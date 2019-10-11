import React from 'react';
import '../App.css';
import Moment from 'react-moment';
import { DATE_FORMAT } from '../constants/dateFormat';
import 'moment/locale/es';

function StudentRow({ identifier, name, paymentDue }) {
  return (
    <div className="StudentRow">
      <p><b>{name}</b></p>
      <p>{identifier}</p>
      <Moment locale={"es"} format={DATE_FORMAT}>
        {paymentDue}
      </Moment>
    </div>
  );
}

export default StudentRow;
