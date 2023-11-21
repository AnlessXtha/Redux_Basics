import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

//Component
import { Counter } from "./features/counter/Counter";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  return (
    <div className="App">
      <h1>Works</h1>
      <h1>The count is {count}</h1>

      <Counter />
    </div>
  );
}

export default App;
