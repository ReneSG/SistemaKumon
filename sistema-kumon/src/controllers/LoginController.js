import { API_URL } from "../constants/apiurl";
import { AUTHENTICATED } from "../constants/sessionstorage";
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
        this.setState({
          isInvalid: true
        });
        /* TO-DO: ERROR HANDLING */
      } else {
        sessionStorage.setItem(AUTHENTICATED, true);
        this.setState({
          isInvalid: false
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export { handleLogin };
