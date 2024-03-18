import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./slices/counterSlices";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});
