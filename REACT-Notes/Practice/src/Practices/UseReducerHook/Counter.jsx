import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "input":
      return { count: action.payload };
    default:
      return state;
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 rounded" onClick={() => dispatch({ type: "increment" })}>+</button>
      <p className="font-bold m-2 text-2xl">Count: {state.count}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded" onClick={() => dispatch({ type: "decrement" })}>-</button>
      <br />
      <input value={state.count}
      onChange={(e) => dispatch({ type: "input", payload: Number(e.target.value) })} 
      type="text" 
      className="border border-gray-400 p-1" />
    </div>
  );
}

export default CounterReducer;