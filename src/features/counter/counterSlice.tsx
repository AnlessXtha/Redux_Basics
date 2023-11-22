import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer funtion
export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.count;

export default counterSlice.reducer;
