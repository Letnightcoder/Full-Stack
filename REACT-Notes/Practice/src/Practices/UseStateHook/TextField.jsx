import { useState } from "react";

export default function MyInput() {
  const [text, setText] = useState("Hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" className="border-2 border-gray-500 p-2 rounded-md" value={text} onChange={handleChange} />
      <p className="font-bold m-2 text-2xl">You Typed: {text}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={() => setText("Hello")}>Reset</button>
    </>
  );
}
