import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import authReducer from "./slice/authenticationSlice";
export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
export default Store;
