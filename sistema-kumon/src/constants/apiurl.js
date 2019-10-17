var API_URL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = "http://intense-sierra-56544.herokuapp.com";
} else {
}
export { API_URL };
