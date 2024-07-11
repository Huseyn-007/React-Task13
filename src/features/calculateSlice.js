import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number1: 0,
  number2: 0,
  operation: "+",
  result: 0,
};

export const calculateSlice = createSlice({
  name: "calculate",
  initialState,
  reducers: {
    setNumber1: (state, action) => {
      state.number1 = action.payload;
    },
    setNumber2: (state, action) => {
      state.number2 = action.payload;
    },
    setOperation: (state, action) => {
      state.operation = action.payload;
    },
    calculateNums: (state) => {
      switch (state.operation) {
        case "+":
          state.result = state.number1 + state.number2;
          break;
        case "-":
          state.result = state.number1 - state.number2;
          break;
        case "/":
          state.result = state.number1 / state.number2;
          break;
        case "*":
          state.result = state.number1 * state.number2;
          break;
        default:
          break;
      }
    },
  },
});
export const { calculateNums, setNumber1, setOperation, setNumber2 } =
  calculateSlice.actions;
export default calculateSlice.reducer;
