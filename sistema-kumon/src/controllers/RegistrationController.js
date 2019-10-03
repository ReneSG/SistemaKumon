import { API_URL } from "../constants/apiurl";
import axios from "axios";

const handleRegister = function() {
  var url = API_URL + "/students";
  const reqBody = {
    name: "Rene",
    last_name_father: "Garcia",
    last_name_mother: "Saenz",
    identifier: "A00818137",
    date_of_birth: "15/08/1997",
    gender: 1,
    phone: "8183669040",
    medical_instructions: "Tengo asma y me voy a morir alv",
    school_attributes: {
      name: "Tec de Monterrey"
    },
    address_attributes: {
      street_name: "Chelsea",
      ext_num: "244",
      int_num: "244",
      neighborhood: "Cumbres de San Agustin",
      city: "Monterrey",
      state: "Nuevo Leon",
      zipcode: "64349",
      between_street_a: "Calle 1",
      between_street_b: "Calle 2"
    },
    emergency_contact_attributes: {
      name: "Eduardo Trujillo",
      phone: "1234342",
      cellphone: "1223424"
    },
    guardians_attributes: [
      {
        name: "Eddy bb",
        last_name_father: "Trujillo",
        last_name_mother: "Ramos",
        email: "edybb@gmail.com",
        phone: "1234456",
        job: "Robar datos en feisbuk"
      },
      {
        name: "Jime",
        last_name_father: "Lomelí",
        last_name_mother: "Cantu",
        email: "jimme@gmail.com",
        phone: "1234456",
        job: "Robarle el cora a Eddy bb ❤"
      }
    ]
  };

  axios
    .post(url, reqBody)
    .then(response => {
      var data = response.data;
      console.log(data);
      if (data.error) {
        /* TO-DO: ERROR HANDLING */
      } else {
        /* TO-DO: SUCCESS HANDLING */
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export { handleRegister };
