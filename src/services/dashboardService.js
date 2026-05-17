import axiosInstance from "../api/axiosInstance";

export const getDashboardStats =
  async () => {
    try {
      const usersResponse =
        await axiosInstance.get("/users");

      const users =
        usersResponse.data.users;

      const stats = {
        totalUsers: users.length,

        activeProjects: 24,

        completedTasks: 184,

        revenue: 245000,
      };

      return stats;
    } catch (error) {
      throw error;
    }
  };