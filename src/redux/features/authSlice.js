import { createSlice } from "@reduxjs/toolkit";

const storedUser = JSON.parse(
  localStorage.getItem("user")
);

const storedToken =
  localStorage.getItem("token");

const initialState = {
  user: storedUser || null,

  token: storedToken || null,

  isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;

      state.token =
        action.payload.token;

      state.isAuthenticated = true;
    },

    logout: (state) => {
      state.user = null;

      state.token = null;

      state.isAuthenticated = false;

      localStorage.removeItem(
        "user"
      );

      localStorage.removeItem(
        "token"
      );
    },
  },
});

export const {
  loginSuccess,
  logout,
} = authSlice.actions;

export default authSlice.reducer;