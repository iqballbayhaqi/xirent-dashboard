import { submitLoginThunk } from "../../action/auth";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {},
  isLoadingLogin: false,
  loginError: {},
  isLoginSuccess: false,
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase("setAuthError", (state) => {
        state.loginError = initialState.loginError;
      })
      .addCase(submitLoginThunk.pending, (state) => {
        state.isLoadingLogin = true;
        state.isLoginSuccess = false;
      })
      .addCase(submitLoginThunk.fulfilled, (state, action) => {
        state.isLoadingLogin = false;
        state.login = action.payload;
        state.isLoginSuccess = true;
        state.isLogged = true;
      })
      .addCase(submitLoginThunk.rejected, (state, action) => {
        state.isLoadingLogin = false;
        state.loginError = action.payload;
        state.isLoginSuccess = false;
      })
      .addCase("setLogoutUser", (state) => {
        state.isLogged = false;
        state.isLoginSuccess = false;
      });
  },
});

export default authSlice.reducer;
