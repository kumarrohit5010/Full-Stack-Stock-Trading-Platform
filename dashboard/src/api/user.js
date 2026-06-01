import axios from "axios";
import API_BASE_URL from "../config";

// GET USER PROFILE
export const getUserProfile = () => {
  return axios.get(`${API_BASE_URL}/api/user/profile`, {
    withCredentials: true,
  });
};