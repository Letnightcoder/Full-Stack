import React, { useState, useEffect } from "react";

function MyEffectComponent2() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

    }, []);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <div>
            <p className="font-bold m-2 text-2xl" >Width: {width}</p>
            <p className="font-bold m-2 text-2xl" >Height: {height}</p>
        </div>
    );
}

export default MyEffectComponent2

