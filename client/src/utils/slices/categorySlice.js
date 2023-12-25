import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Constant";

const category = createSlice({
  name: "category",
  initialState: { status: "PENDING", categories: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "PENDING";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "FAILED";
      });
  },
});

export default category.reducer;

export const fetchCategories = createAsyncThunk("category", async () => {
  const response = await fetch(BASE_URL + "api/category/findall");
  return response.json();
});
