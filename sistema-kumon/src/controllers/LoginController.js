import { API_URL } from "../constants/apiurl";

function handleLogin() {
  var url = API_URL + "/users/sign_in";
  const reqBody = {
    email: this.state.email,
    password: this.state.password
  };

  axios
    .post(url, reqBody)
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
}

export { handleLogin };
