import { API_URL } from "../constants/apiurl";
import axios from "axios";

const registerStudent = (
  name,
  last_name_father,
  last_name_mother,
  identifier,
  date_of_birth,
  gender,
  phone,
  medical_instructions,
  school_attributes,
  address_attributes,
  emergency_contact_attributes,
  guardians_attributes,
) => {
  var url = API_URL + "/students";
  const reqBody = {
    name: name,
    last_name_father: last_name_father,
    last_name_mother: last_name_mother,
    identifier: identifier,
    date_of_birth: date_of_birth,
    gender: parseInt(gender, 10),
    phone: phone,
    medical_instructions: medical_instructions,
    school_id: 1,
    address_attributes: address_attributes,
    emergency_contact_attributes: emergency_contact_attributes,
    guardians_attributes: [
      guardians_attributes
    ]
  };

  return axios.post(url, reqBody);
};

const getStudents = () => {
  let url = API_URL + "/students"
  return axios.get(url);
};

export { registerStudent, getStudents };
