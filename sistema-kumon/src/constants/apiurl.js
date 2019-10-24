var API_URL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:3001";
} else {
  API_URL = "https://intense-sierra-56544.herokuapp.com";
}
export { API_URL };
