import React, { useState } from "react";

function CounterState() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // setCount(count - 2);
    setCount(prevCount => prevCount - 2);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="text-center ml-30 mr-30 bg-gray-700 p-10 rounded-lg text-white font-bold ">
      <p className="text-2xl mb-4">Count : {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CounterState;
