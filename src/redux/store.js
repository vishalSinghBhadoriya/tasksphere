import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./features/themeSlice";
import authReducer from "./features/authSlice";
import sidebarReducer from "./features/sidebarSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    sidebar: sidebarReducer,
  },
});