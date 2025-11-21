import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import productReducer from "./productSlice";
import profileReducer from "./profileSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
    profile: profileReducer,
  },
});

export default store;
