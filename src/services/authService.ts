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
