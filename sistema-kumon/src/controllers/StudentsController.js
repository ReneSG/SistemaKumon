import { API_URL } from "../constants/apiurl";
import axios from "axios";
import { TOKEN } from "../constants/sessionstorage";

export const registerStudent = async (
  id,
  name,
  last_name_father,
  last_name_mother,
  identifier,
  date_of_birth,
  gender,
  phone,
  medical_instructions,
  status,
  school_attributes,
  address_attributes,
  emergency_contact_attributes,
  guardians_attributes,
  student_subjects_attributes
) => {
  var url = API_URL + "/students";
  let reqBody = {
    name: name,
    last_name_father: last_name_father,
    last_name_mother: last_name_mother,
    identifier: identifier,
    date_of_birth: date_of_birth,
    gender: parseInt(gender, 10),
    phone: phone,
    medical_instructions: medical_instructions,
    active: status,
    school_attributes: school_attributes,
    address_attributes: address_attributes,
    emergency_contact_attributes: emergency_contact_attributes,
    guardians_attributes: [guardians_attributes],
    student_subjects_attributes: student_subjects_attributes
  };

  let method = "post";

  if (id) {
    url = url + `/${id}`;
    method = "put";
  }

  console.log(reqBody);

  const headers = {
    Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
  };

  try {
    const response = await axios({ url: url, method: method, data: reqBody, headers: { ...headers } });
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

export const getSubjects = async () => {
  let url = API_URL + "/subjects";
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
    return false;
  }
};

export const getStudent = async id => {
  let url = API_URL + "/students/" + id;
  try {
    const headers = {
      'Authorization': 'Bearer ' + sessionStorage.getItem(TOKEN)
    }
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
