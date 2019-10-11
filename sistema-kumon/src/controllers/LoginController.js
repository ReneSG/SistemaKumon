import { API_URL } from "../constants/apiurl";
import { AUTHENTICATED, TOKEN } from "../constants/sessionstorage";
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
        console.log(response)
        const token = response.headers.authorization.split(' ')[1]
        sessionStorage.setItem(AUTHENTICATED, true);
        sessionStorage.setItem(TOKEN, token)
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export { handleLogin };
