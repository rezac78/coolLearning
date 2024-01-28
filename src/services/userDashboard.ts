import axiosInstance from "../utils/axiosInstance";

export const UserGetData = async (token: string | null) => {
  try {
    const response = await axiosInstance.get("/user/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const updateUserDetails = async (
  userData: any,
  token: string | null
) => {
  try {
    const response = await axiosInstance.put(`/user/update`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { message: "Failed to update user" };
  }
};
