import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'
import SelectInput from '../components/SelectInput'

const MexicoStates = [
  "Aguascaliente",
  "Baja California", 
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila de Zaragoza",
  "Colima",
  "Durango",
  "Estado de México",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "Michoacán de Ocampo",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz de Ignacio de la Llave",
  "Yucatán",
  "Zacatecas"
]

const attributes = [
    ["street_name", "address_street_name", "Calle", TextInput, {}],
    ["ext_num", "address_ext_num", "Número exterior", TextInput, {}],
    ["int_num", "address_int_num", "Número interior", TextInput, {}],
    ["neighborhood", "address_neighborhood", "Colonia", TextInput, {}],
    ["city", "address_city", "Ciudad", TextInput, {}],
    ["state", "address_state", "Estado", SelectInput, {"options": MexicoStates}],
    ["zipcode", "address_zipcode", "Código postal", TextInput, {}],
    ["between_street_a", "address_between_street_a", "Entre calles 1", TextInput, {}],
    ["between_street_a", "address_between_street_b", "Entre calles 2", TextInput, {}],
];


class AddressForm extends React.Component {
  render() {
    let inputs = attributes.map(
      ([prop_key, key, value, Tag, extraArgs]) => {
        return (
          <Tag
            key={key}
            fieldKey={key}
            name={value}
            value={this.props[prop_key]}
            getFieldDecorator={this.props.getFieldDecorator}
            {...extraArgs}
          />
        );
      }
    );
    return (
      <div className="Address">
        <header className="Address-header">
          <h2>Dirección</h2>
        </header>
        {inputs}
      </div>
    );
  }
}

export default AddressForm;
