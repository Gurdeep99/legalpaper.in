import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import HomeDataApiReducer from "./slices/homeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    HomeDataApiSlice: HomeDataApiReducer,
  },
});
