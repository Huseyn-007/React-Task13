import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateNums,
  setNumber1,
  setOperation,
  setNumber2,
} from "../features/counterSlice";

export default function Counter() {
  const num1 = useSelector((state) => state.counter.number1);
  const num2 = useSelector((state) => state.counter.number2);
  const operation = useSelector((state) => state.counter.operation);
  const resulttt = useSelector((state) => state.counter.result);

  const dispatch = useDispatch();
  return (
    <>
      <input
        value={num1}
        onChange={(e) => {dispatch(setNumber1(Number(e.target.value)))
            dispatch(calculateNums())}}
        placeholder="enter value"
        type="number"
      ></input>
      <select
        onChange={(e) => {
          dispatch(setOperation(e.target.value));
          dispatch(calculateNums());
        }}
        value={operation}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
      <input
        value={num2}
        onChange={(e) => {
          dispatch(setNumber2(Number(e.target.value)));
          dispatch(calculateNums());
        }}
        placeholder="enter second value"
        type="number"
      ></input>

      <span style={{ border: "4px solid black", margin: "10px" }}>
        ={resulttt}
      </span>

      {/* <button onClick={() => dispatch(decrement())}>Decrement</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(resetValue())}>Reset</button>
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
        Increment {num}
      </button> */}
    </>
  );
}
