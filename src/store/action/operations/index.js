import {
  verifKtp,
  updateWhithdrawal,
  getAllUsers,
  getInsight,
  getOrders,
  cancelDeposit,
  getWithdrawal,
  transferDeposit,
} from "../../../service/operations";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const verifKtpThunk = createAsyncThunk(
  "operations/verifKtp",
  async (data, { rejectWithValue }) => {
    try {
      const response = await verifKtp(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getAllUsersThunk = createAsyncThunk(
  "operations/getAllUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getAllUsers(id);
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const getOrdersThunk = createAsyncThunk(
  "operations/getOrders",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getOrders(id);
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const getInsightThunk = createAsyncThunk(
  "operations/getInsight",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getInsight(id);
      return response;
    } catch (e) {
      rejectWithValue(e);
    }
  }
);

export const updateWhithdrawalThunk = createAsyncThunk(
  "operations/updateWhithdrawal",
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateWhithdrawal(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const transferDepositThunk = createAsyncThunk(
  "operations/transferDeposit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await transferDeposit(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const cancelDepositThunk = createAsyncThunk(
  "operations/cancelDeposit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await cancelDeposit(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getWithdrawalThunk = createAsyncThunk(
  "operations/getWithdrawal",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getWithdrawal(data);
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
