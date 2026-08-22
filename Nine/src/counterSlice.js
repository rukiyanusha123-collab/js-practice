import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    counter1: 0,
    counter2: 0,
  },

  reducers: {
    increment1: (state) => {
      state.counter1 += 1;
    },

    decrement1: (state) => {
      state.counter1 -= 1;
    },

    increment2: (state) => {
      state.counter2 += 1;
    },

    decrement2: (state) => {
      state.counter2 -= 1;
    },
  },
});

export const {
  increment1,
  decrement1,
  increment2,
  decrement2,
} = counterSlice.actions;

export default counterSlice.reducer;