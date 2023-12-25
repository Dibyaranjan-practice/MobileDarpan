import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import categoryReducer from "./slices/categorySlice";

const store = configureStore({ reducer: { bannerReducer, categoryReducer } });

export default store;
