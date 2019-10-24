import React from 'react';
import '../App.css';

import { AutoComplete, Form, Input } from 'antd';

class SchoolSelector extends React.Component {
  render() {
    const schools = this.props.schools.map(({name, id}) => {
      return name;
    });
    return (
      <div className="School">
        <header className="School-header">
          <h2>Escuela</h2>
        </header>
        <Form.Item label="Nombre">
          {this.props.getFieldDecorator(this.props.formKey, {
            rules: [
              {
                required: true,
                message: `El campo "Escuela" es obligatorio!`,
              }
            ],
            initialValue: this.props.school
          })(
            <AutoComplete
              dataSource={schools}
              filterOption={(inputValue, option) =>
                option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
            >
              <Input />
            </AutoComplete>
          )}
        </Form.Item>
      </div>
    );
  }
}

export default SchoolSelector;
