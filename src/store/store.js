import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import MeDataApiReducer from "./slices/meSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    MeDataApi: MeDataApiReducer,
  },
});
