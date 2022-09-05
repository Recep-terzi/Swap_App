import { configureStore } from "@reduxjs/toolkit";
import swapSlice from "./swapSlice";

export const store = configureStore({
  reducer: {
    swap: swapSlice,
  },
});
