import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 10000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;