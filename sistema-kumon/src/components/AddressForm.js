import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["street_name", "Calle"],
    ["ext_num", "Número exterior"],
    ["int_num", "Número interior"],
    ["neighborhood", "Colonia"],
    ["city", "Ciudad"],
    ["state", "Estado"],
    ["zipcode", "Código postal"],
    ["between_street_a", "Entre calles 1"],
    ["between_street_b", "Entre calles 2"],
];


class AddressForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "street_name": "",
      "ext_num": "",
      "int_num": "",
      "neighborhood": "",
      "city": "",
      "state": "",
      "zipcode": "",
      "between_street_a": "",
      "between_street_b": "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key, value) {
    this.setState({
      ...this.state,
      [key]: value,
    });
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {

    let inputs = attributes.map(
        ([key, value]) => {
            console.log(key, value);
            return (
                <TextInput
                    name={value}
                    value={this.state[key]}
                    changeHandler={(event) => this.handleChange(key, event.target.value)}
                />
            );
        }
    );
    console.log(inputs);
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
