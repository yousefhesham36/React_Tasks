import axios from "axios";
import qs from "qs";
const URL = import.meta.env.VITE_API_URL;

export const getUsersAPI = () => {
  return axios.get(`${URL}/users`);
};

export const getSingleUserAPI = (params) => {
  console.log("API params:", params);
  if (params.id) {
    console.log("Fetching single user with ID:", params.id);
    return axios.get(`${URL}/users/${params.id}`);
  }
  const searchParams = qs.stringify(params, { skipNulls: true });
  console.log("Query string:", searchParams);
  return axios.get(`${URL}/users?${searchParams}`);
};