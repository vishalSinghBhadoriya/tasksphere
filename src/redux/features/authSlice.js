import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const parsedUser = storedUser
  ? JSON.parse(storedUser)
  : null;

const initialState = {
  isAuthenticated: !!parsedUser,
  user: parsedUser,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem("user");
    },

  },
});

export const { login, logout } =
  authSlice.actions;

export default authSlice.reducer;