import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";

// LOGIN API
export const loginUser = (data) => {
  return axios.post(`${API_URL}/api/user/login`, data, {
    withCredentials: true,
  });
};