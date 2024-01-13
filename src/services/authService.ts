import axios from "../utils/axiosInstance";
import { RegistrationData } from "../types/auth";
import { useState } from "react";

export const RegisterReq = async (registrationData: RegistrationData) => {
 try {
    const response = await axios.post("/auth/register", registrationData);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
