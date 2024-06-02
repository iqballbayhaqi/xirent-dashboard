import { verifKtpThunk } from "../../action/operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  verifKtp: {},
  isLoadingVerifKtp: false,
  isSuccessVerifKtp: false,
};

export const operations = createSlice({
  name: "operations",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(verifKtpThunk.pending, (state) => {
        state.isLoadingVerifKtp = true;
        state.isSuccessVerifKtp = false;
      })
      .addCase(verifKtpThunk.fulfilled, (state, action) => {
        state.isLoadingVerifKtp = false;
        state.changeFollow = action.payload;
        state.isSuccessVerifKtp = true;
      })
      .addCase(verifKtpThunk.rejected, (state, action) => {
        state.isLoadingVerifKtp = false;
        state.isSuccessVerifKtp = false;
      });
  },
});

export default operations.reducer;
