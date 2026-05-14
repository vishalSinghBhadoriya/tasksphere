import axiosInstance from "../api/axiosInstance";

export const getUsers = async () => {
  try {
    const response =
      await axiosInstance.get("/users");

    return response.data.users;
  } catch (error) {
    throw error;
  }
};