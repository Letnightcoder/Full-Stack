import React, { useCallback, useState } from "react";
import Header from "./Header";

function MainPage() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, []);
  // const newFn = useCallback((count) => {}, [count]);

  return (
    <div className="container mx-auto mt-5 text-center space-y-4 bg-gray-500 h-screen flex flex-col items-center justify-center">
      <Header newFn={newFn} />
      <h1 className="text-2xl font-bold">{count}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded" onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </div>
  );
}

export default MainPage;
