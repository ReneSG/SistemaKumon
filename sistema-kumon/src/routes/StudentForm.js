import React from "react";
import "../App.css";

import { Button, Form, notification } from "antd";

import TextInput from "../components/TextInput";
import DateInput from "../components/DateInput";
import GenderInput from "../components/GenderInput";
import TextAreaInput from "../components/TextAreaInput";
import AddressForm from "../components/AddressForm";
import EmergencyContactForm from "../components/EmergencyContactForm";
import GuardiansForm from "../components/GuardiansForm";
import SchoolSelector from "../components/SchoolSelector";
import SubjectsForm from "../components/SubjectsForm";

import { registerStudent, getSubjects } from "../controllers/StudentsController";
import { getSchools } from "../controllers/SchoolsController";

const attributes = [
  ["name", "Nombre/s", TextInput],
  ["last_name_father", "Apellido paterno", TextInput],
  ["last_name_mother", "Apellido materno", TextInput],
  ["identifier", "Matricula", TextInput],
  ["date_of_birth", "Fecha de nacimiento", DateInput],
  ["gender", "Genero", GenderInput, {firstOption: "Masculino", secondOption: "Femenino"}],
  ["phone", "Telefono", TextInput],
  ["medical_instructions", "Cuestiones médicas", TextAreaInput],
  ["active", "Estado del alumno", GenderInput, {firstOption: "Inactivo", secondOption: "Activo", defaultValue: 1}]
];

class StudentFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      subjects: [],
      selectedSubjects: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSubjectsHandler = this.updateSubjectsHandler.bind(this);
  }

  updateSubjectsHandler(checkedSubjectsIds) {
    this.state.selectedSubjects = checkedSubjectsIds;
  }

  async componentDidMount() {
    const schools = await getSchools();
    const subjects = await getSubjects();
    const selectedSubjects = this.props.subjects.map(({name, id}) => {return id});
    this.setState({
      schools: schools,
      subjects: subjects,
      selectedSubjects: selectedSubjects
    });
  }

  async handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        let selected_school = this.state.schools.filter(
          school => school.name === values.school_selector
        );

        let school_object = {
          name: values.school_selector
        };
        if (selected_school.length > 0) {
          school_object = {
            id: selected_school[0].id
          };
        }

        let guardian_id = {}, address_id = {}, ec_id = {};
        if (this.props.guardian) {
          guardian_id = { id: this.props.guardian.id };
        }

        if (this.props.address) {
          address_id = { id: this.props.address.id };
        }

        if (this.props.emergency_contact) {
          ec_id = { id: this.props.emergency_contact.id };
        }


        var subjects_to_be_added_or_updated = this.state.selectedSubjects.map(id => {return {subject_id: id, student_id: this.props.id};});
        if (this.props.subjects) {
          subjects_to_be_added_or_updated = subjects_to_be_added_or_updated.map(({subject_id, student_id}) => {
            const subjectAleadyExist = this.props.student_subjects.filter(el => el.subject_id == subject_id);
            if(subjectAleadyExist.length != 0) {
              return {id: subjectAleadyExist[0].id, subject_id: subject_id, student_id: student_id}
            } else {
              return {subject_id: subject_id, student_id: student_id}
            }
          });
        }

        var subjects_to_be_deleted = this.props.student_subjects.map(({id, subject_id}) => {return {id: id, subject_id: subject_id, "_destroy": true};});
        if (this.props.subjects) {
          subjects_to_be_deleted = subjects_to_be_deleted.filter(({subject_id}) => {return !this.state.selectedSubjects.includes(subject_id)});
        }

        const student_subjects_attributes = subjects_to_be_added_or_updated.concat(subjects_to_be_deleted)

        let response = await registerStudent(
          this.props.id,
          values.name,
          values.last_name_father,
          values.last_name_mother,
          values.identifier,
          values.date_of_birth,
          values.gender,
          values.phone,
          values.medical_instructions,
          values.active,
          school_object,
          {
            ...address_id,
            street_name: values.address_street_name,
            ext_num: values.address_ext_num,
            int_num: values.address_int_num,
            neighborhood: values.address_neighborhood,
            city: values.address_city,
            state: values.address_state,
            zipcode: values.address_zipcode,
            between_street_a: values.address_between_street_a,
            between_street_b: values.address_between_street_b
          },
          {
            ...ec_id,
            name: values.emergency_contact_name,
            phone: values.emergency_contact_phone,
            cellphone: values.emergency_contact_cellphone
          },
          {
            ...guardian_id,
            name: values.guardian_name,
            last_name_father: values.guardian_last_name_father,
            last_name_mother: values.guardian_last_name_mother,
            email: values.guardian_email,
            phone: values.guardian_phone,
            job: values.guardian_job
          },
          student_subjects_attributes
        );
        if (response) {
          notification.success({
            message: 'Éxito!',
            description:
            'El estudiante se ha guardado correctamente.',
          });
        } else {
          notification.error({
            message: 'Error al registrar el estudiante!',
            description:
            'Favor de revisar que la matricula no sea repetida.',
          });
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    let inputs = attributes.map(([key, value, Tag, extraArgs]) => {
      return (
        <Tag
        key={key}
        fieldKey={key}
        name={value}
        value={this.props[key]}
        getFieldDecorator={getFieldDecorator}
        extraArgs={extraArgs}
        />
      );
    });

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    return (
      <div className="Login">
      <header className="Login-header">
      <h1>{this.props.purpose}</h1>
      </header>
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      {inputs}
      <SchoolSelector
      formKey="school_selector"
      schools={this.state.schools}
      school={this.props.school_name}
      getFieldDecorator={getFieldDecorator}
      />
      <GuardiansForm
      formKey="guardians_attributes"
      getFieldDecorator={getFieldDecorator}
      {...this.props.guardian}
      />
      <AddressForm
      formKey="address_attributes"
      getFieldDecorator={getFieldDecorator}
      {...this.props.address}
      />
      <EmergencyContactForm
      formKey="emergency_contact_attributes"
      getFieldDecorator={getFieldDecorator}
      {...this.props.emergency_contact}
      />
      <SubjectsForm
      formKey="student_subjects_attributes"
      getFieldDecorator={getFieldDecorator}
      subjectOptions={this.state.subjects}
      updateSubjectsHandler={this.updateSubjectsHandler}
      subjects={this.props.subjects}
      />
      <Button htmlType="submit">Registrar</Button>
      </Form>
      </div>
    );
  }
}

const StudentForm = Form.create({ name: "student-form" })(StudentFormComponent);
export default StudentForm;
