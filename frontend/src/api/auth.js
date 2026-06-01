import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// LOGIN API
export const loginUser = (data) => {
  return axios.post(`${API_URL}/api/user/login`, data, {
    withCredentials: true,
  });
};