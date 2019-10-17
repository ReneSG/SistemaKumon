import React from 'react';
import '../App.css';

import TextInput from '../components/TextInput'

const attributes = [
    ["school_name", "Nombre/s", TextInput],
];

class SchoolSelector extends React.Component {
  render() {
    let inputs = attributes.map(
      ([key, value, Tag]) => {
        return (
          <Tag
            key={key}
            fieldKey={key}
            name={value}
            value={this.props[key]}
            getFieldDecorator={this.props.getFieldDecorator}
          />
        );
      }
    );
    return (
      <div className="Address">
        <header className="Address-header">
          <h2>Escuela</h2>
        </header>
        {inputs}
      </div>
    );
  }
}

export default SchoolSelector;
