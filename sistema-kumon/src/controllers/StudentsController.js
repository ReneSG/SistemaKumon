import { API_URL } from "../constants/apiurl";
import axios from "axios";

export const registerStudent = async (
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
  guardians_attributes
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
    guardians_attributes: [guardians_attributes]
  };

  try {
    const response = await axios.post(url, reqBody);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getStudents = async () => {
  let url = API_URL + "/students";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const markAttendance = async identifier => {
  var url = API_URL + "/student/mark_attendance";
  const reqBody = {
    identifier: identifier
  };

  try {
    const response = await axios.post(url, reqBody);
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};