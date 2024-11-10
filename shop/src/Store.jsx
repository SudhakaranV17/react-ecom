import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default Store;
