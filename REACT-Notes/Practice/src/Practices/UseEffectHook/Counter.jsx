import { useState, useEffect } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

//   useEffect(() => {
//     setTimeout(() => {
//         setCount(count => count + 1);
//     }, 2000);
//   }); // this will cause an infinite loop

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(count => count + 1);
//     }, 2000);
//   }, []); // empty array means that the effect will only run once

  useEffect(() => {
    setTimeout(() => {
      setCount(count => count + 1);
    }, 3000);
  }, [count, name]); // this will run every time count or name changes

  return (
    <div>
      <p className="font-bold m-2 text-2xl text-blue-900">{name} rendered {count} times!</p>
    </div>
  );
    
}

export default CounterEffect;