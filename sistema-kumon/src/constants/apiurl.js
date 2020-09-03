var API_URL;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  API_URL = "http://localhost:3000";
} else {
  API_URL = "http://localhost:3000";
}
export { API_URL };
