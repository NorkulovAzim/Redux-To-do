import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    product: productReducer,
  },
});

export default store;
