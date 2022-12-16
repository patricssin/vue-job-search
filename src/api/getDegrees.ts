import axios from "axios";
import { Degree } from "./types";

const getDegrees = async () => {
  const baseURL = process.env.VUE_APP_API_URL;
  const response = await axios.get<Degree[]>(`${baseURL}/degrees`);
  return response.data;
};

export default getDegrees;
