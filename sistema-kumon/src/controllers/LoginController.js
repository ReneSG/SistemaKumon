import { API_URL } from "../constants/apiurl";
import { AUTHENTICATED, TOKEN, EMAIL, ADMIN } from "../constants/sessionstorage";
import axios from "axios";

const handleLogin = function (email, password) {
  var url = API_URL + "/login";
  const reqBody = {
    user: { email, password }
  };

  axios
    .post(url, reqBody, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      var data = response.data;
      console.log(data);
      if (data.error) {
        console.log("Error")
        /* TO-DO: ERROR HANDLING */
      } else {
        const token = response.headers.authorization.split(' ')[1];
        const email = data.email;
        const is_admin = data.admin;
        sessionStorage.setItem(AUTHENTICATED, true);
        sessionStorage.setItem(TOKEN, token);
        sessionStorage.setItem(EMAIL, email);
        sessionStorage.setItem(ADMIN, is_admin);
        if (is_admin) {
          window.location.href = "/students";
        } else {
          window.location.href = "/student/mark_attendance";
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export { handleLogin };
