import { API_URL } from "../constants/apiurl";
import axios from "axios";

const handleRegister = function(
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
) {
  var url = API_URL + "/students";
  const reqBody = {
    name: name,
    last_name_father: last_name_father,
    last_name_mother: last_name_mother,
    identifier: identifier,
    date_of_birth: date_of_birth,
    gender: gender,
    phone: phone,
    medical_instructions: medical_instructions,
    school_attributes: school_attributes,
    address_attributes: address_attributes,
    emergency_contact_attributes: emergency_contact_attributes,
    guardians_attributes: [
      guardians_attributes
    ]
  };

  return axios.post(url, reqBody);
};

export { handleRegister };
