import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Constant";

const banner = createSlice({
  name: "banner",
  initialState: { status: "PENDING", banners: {} },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.status = "PENDING";
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        let temp = action.payload.map((element) => {
          state.banners[element.sequence] = element;
          return 0;
        });
      })
      .addCase(fetchBanners.rejected, (state) => {
        state.status = "FAILED";
      });
  },
});

export default banner.reducer;

export const fetchBanners = createAsyncThunk("banners", async () => {
  const response = await fetch(BASE_URL + "Api/banner/findall");
  return response.json();
});
