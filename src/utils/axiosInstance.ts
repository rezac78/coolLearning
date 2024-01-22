import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `${process.env.API_BASE_URL}/api`,
  timeout: 10000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;