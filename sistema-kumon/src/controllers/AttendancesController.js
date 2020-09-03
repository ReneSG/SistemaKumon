import { API_URL } from "../constants/apiurl";
import axios from "axios";
import { TOKEN } from "../constants/sessionstorage";

export const getTodayAttendance = async () => {
  let url = API_URL + "/attendances/today";

  const headers = {
    Authorization: "Bearer " + sessionStorage.getItem(TOKEN)
  };

  try {
    const response = await axios.get(url, { headers })
    console.log(response)
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
