import {useState, useMemo} from "react";

function CounterMemo() {
    const [number, setNumber] = useState(0);
    const [Counter, setCounter] = useState(0);

    function cubeNum (num) {
        console.log("Calculation done.");
        return Math.pow(num, 3);
    }

    const result = useMemo(() => cubeNum(number), [number]);

    return (
      <>
        <input
          className="border border-blue-500 p-1 m-2 rounded"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <h1 className="text-lg font-bold ml-2 text-blue-900">
          Cube of the number: {result}
        </h1>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded m-2"
          onClick={() => {
            setCounter(Counter + 1);
          }}
        >
          Counter++
        </button>

        <h1 className="text-lg font-bold ml-2 text-blue-900">
          Counter: {Counter}
        </h1>
      </>
    );
}

export default CounterMemo;