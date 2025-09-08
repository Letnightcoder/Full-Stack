import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [IsEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Rosh");
  };

  const increment = () => {
    setAge(age + 1);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!IsEmployed);
  };

  return (
    <div className="h-[220px] w-[200px] flex flex-col border border-gray-500/80 rounded-lg justify-center p-1.5">
      <p className="mb-5 font-sans font-bold text-blue-700">Name : {name}</p>
      <button className="p-0.5 rounded border border-gray-500/90 font-sans font-bold" onClick={updateName}> Set Name</button>

      <p className="mb-5 font-sans font-bold text-blue-700">Age : {age}</p>
      <button className="p-0.5 rounded border border-gray-500/90 font-sans font-bold" onClick={increment}> Set Age</button>

      <p className="mb-5 font-sans font-bold text-blue-700">Is Employed : {IsEmployed ? "Yes" : "No"}</p>
      <button className="p-0.5 rounded border border-gray-500/90 font-sans font-bold" onClick={toggleEmployedStatus}> Set Employed</button>
    </div>
  );
}

export default MyComponent;
