import { createSlice } from "@reduxjs/toolkit";

const storedUser =
  JSON.parse(localStorage.getItem("user"));

const initialState = {
  isAuthenticated: !!storedUser,
  user: storedUser || null,
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
    },
  },
});

export const { login, logout } =
  authSlice.actions;

export default authSlice.reducer;