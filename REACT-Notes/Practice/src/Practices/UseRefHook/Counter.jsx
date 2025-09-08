import React, { useState, useRef, useEffect } from 'react';

function CounterRef() {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
        countRef.current = countRef.current + 1;
    } );

    return (
      <>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2 mt-2"
          type="button"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <h1 className='text-lg font-bold ml-2'>Count: {count}</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2"
          type="button"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <h1 className='text-xl font-bold ml-2'>Render Count: {countRef.current}</h1>
      </>
    );
}

export default CounterRef