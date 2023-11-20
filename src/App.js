import "./App.css";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
