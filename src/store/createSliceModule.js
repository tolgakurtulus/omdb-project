import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const createSliceModule = (name, data) =>
  createSlice({
    name,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(data.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(data.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.data = action.payload;
      });
      builder.addCase(data.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.data = [];
      });
    },
  });
