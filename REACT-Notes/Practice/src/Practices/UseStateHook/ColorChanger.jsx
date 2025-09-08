import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    // setColor("Blue");

    // if (color === "Red") {
    //   setColor("Blue");
    // } else {
    //   setColor("Red");
    // }

    // setColor(color === 'Red' ? 'Blue' : 'Red');

    setColor((prevColor) => prevColor === 'Red' ? 'Blue' : 'Red');
  };

  return (
    <>
      <h1 className="text-3xl font-bold pb-4">
        My favourite color is {color}!
      </h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeColor}>
        Change color
      </button>
    </>
  );
}

export default ColorChanger;
