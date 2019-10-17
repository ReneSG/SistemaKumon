var API_URL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = "http://sistema-kumon.herokuapp.com";
} else {
}
export { API_URL };
