import axiosInstance from "../utils/axiosInstance";
export const updateAdminDetails = async (
  userData: any,
  token: string | null
) => {
  try {
    const response = await axiosInstance.put(`/admin/update`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    return { message: "Failed to update user" };
  }
};
