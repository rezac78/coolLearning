import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://cool-api-75mo.onrender.com/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;

// baseURL: "https://cool-api-75mo.onrender.com/api",
// baseURL: "http://localhost:3001/api",