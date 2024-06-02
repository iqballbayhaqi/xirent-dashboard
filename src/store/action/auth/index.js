import { login } from "../../../service/auth";
import Cookies from "js-cookie";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

export const submitLoginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: response.data.email,
          userId: response.data.userId,
        })
      );
      Cookies.set("token", response.data.token);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const resetAuthError = createAction("setAuthError");

export const setLogoutUser = createAction("setLogoutUser");
