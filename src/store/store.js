import { configureStore } from "@reduxjs/toolkit";
import appReducers from "./rootReducers";

export const store = configureStore({
  reducer: appReducers,
});
