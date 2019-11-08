import { API_URL } from "../constants/apiurl";
import axios from "axios";
import { TOKEN } from "../constants/sessionstorage";

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

  const headers = {
    Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
  };

  try {
    const response = await axios.post(url, reqBody, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getStudents = async () => {
  let url = API_URL + "/students";
  try {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
    };
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getNextPayment = async identifier => {
  let url = API_URL + "/student/" + identifier + "/next_payment_date";
  try {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
    };
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const payMonth = async identifier => {
  var url = API_URL + "/payments";
  const reqBody = {
    student_id: identifier
  };

  try {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
    };
    console.log(reqBody);
    const response = await axios.post(url, reqBody, { headers: headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const markAttendance = async identifier => {
  var url = API_URL + "/student/mark_attendance";
  const reqBody = {
    identifier: identifier
  };

  try {
    const headers = {
      Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
    };
    const response = await axios.post(url, reqBody, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
