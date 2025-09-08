import { useRef } from "react";

export default function Input() {
  const inputElem = useRef();

  function btnClicked() {
    inputElem.current.style.background = "blue";
  }

  return (
    <>
        <input
            className="border border-gray-400 p-1 m-2"
            ref={inputElem}
            type="text" 
        />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded m-2"
        onClick={btnClicked}
      >
        Change Background
      </button>
    </>
  );
}
