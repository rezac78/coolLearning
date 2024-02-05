import axios from "../utils/axiosInstance";
import { RegistrationData, LoginData } from "../types/auth";

export const RegisterReq = async (registrationData: RegistrationData) => {
  try {
    const response = await axios.post("/auth/register", registrationData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const LoginReq = async (LoginData: LoginData) => {
  try {
    const response = await axios.post("/auth/login", LoginData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const LogoutReq = async () => {
  localStorage.removeItem("accessToken");
  return { success: true, message: "Logged out successfully" };
};

export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  try {
    const response = await axios.post("/auth/refresh", { refreshToken });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data.accessToken;
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw new Error("Failed to refresh token");
  }
};
