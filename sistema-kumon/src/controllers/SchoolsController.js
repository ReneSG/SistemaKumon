import { API_URL } from "../constants/apiurl";
import axios from "axios";

export const getSchools = async () => {
  let url = API_URL + "/schools";
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};