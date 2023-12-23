import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";

const store = configureStore({ reducer: { bannerReducer } });

export default store;
