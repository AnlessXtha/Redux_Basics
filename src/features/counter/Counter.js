import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { increment, decrement, incrementByAmount } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  //Alternative way (id the name of the key of initalState is 'count')
  // const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  // console.log(count);
  return (
    <div className="Counter">
      <h1>The count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(4))}>
        Increment by 4
      </button>
    </div>
  );
}

export default Counter;
