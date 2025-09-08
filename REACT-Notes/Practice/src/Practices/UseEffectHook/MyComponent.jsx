import React, { useState, useEffect } from "react";

function MyEffectComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Clicked ${count} ${color} times`;
    }, [count]);

    function addCount() {
        setCount(count + 1);
    }
    function subtractCount() {
        setCount(count - 1);
    }

    function ChangeColor() {
        setColor(color === "green" ? "red" : "green");
    }

    return (
        <>
            <p className="font-bold m-2 text-2xl" style={{color: color}}>Count: {count}</p>
            <button className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1 " onClick={addCount}>Add</button>
            <button className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1 " onClick={subtractCount}>Subtract</button> 
            <button className="bg-blue-500 hover:bg-blue-700 font-medium py-1 px-1 rounded m-1 " onClick={ChangeColor}>Change Color</button>
        </>
    )
}

export default MyEffectComponent