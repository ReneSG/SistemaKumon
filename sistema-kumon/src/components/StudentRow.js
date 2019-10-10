import React from 'react';
import '../App.css';

function StudentRow({identifier, name, paymentDue}) {
  return (
    <div className="StudentRow">
      <p><b>{name}</b></p>  
      <p>{identifier}</p>
      <p>{paymentDue}</p>
    </div>
  );
}

export default StudentRow;
