import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";
import { RootState } from "../../redux/store";

export function Counter() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>The count is {count}</h1>
      <div
        style={{
          margin: "0 100px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement by amount"
          onClick={() => dispatch(incrementByAmount(4))}
        >
          Increase value by 4
        </button>
        <button
          aria-label="Increment by amount"
          onClick={() => dispatch(decrementByAmount(4))}
        >
          Decrease value by 4
        </button>
      </div>
    </div>
  );
}
