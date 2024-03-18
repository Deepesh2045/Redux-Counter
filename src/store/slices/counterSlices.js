import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      //   state.count = state.count + 1;
      if (state.count < 25) {
        state.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      if (state.count > 1) {
        state.count -= 1;
      }
    },
    resetCount: (state, action) => {
      state.count = 0;
    },
  },
});
export const { increaseCount, decreaseCount, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
