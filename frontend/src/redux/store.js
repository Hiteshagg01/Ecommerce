import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product/productSlice";
import cartSlice from "./cart/cartSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});
