import { useState } from "react";

function CarSeter() {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "Red"
    });

    const changeCar = () => {
        // setCar({
        //     brand: "Chevrolet",
        //     model: "Camaro",
        //     year: 2022,
        //     color: "Yellow"
        // });

        // setCar((prevCar) => ({
        //     ...prevCar,
        //     color: "Yellow"
        // }));

        setCar((prevCar) => ({
            ...prevCar,
            color: prevCar.color === "Red" ? "Yellow" : "Red",
            brand: prevCar.brand === "Ford" ? "Chevrolet" : "Ford",
            model: prevCar.model === "Mustang" ? "Camaro" : "Mustang"
        }));
        
    };

    return (
        <div>
            <h1 className="text-3xl font-bold pb-4">My {car.brand}</h1>
            <p className="text-lg font-bold pb-4 text-pink-600"> 
                It is a {car.color} {car.model} from {car.year}.
            </p>
           
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={changeCar}>Change Car</button>
            
            {/* <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
            onClick={() => setCar({
                brand: "Chevrolet",
                model: "Camaro",
                year: 2022,
                color: "Yellow"
            })}>
                Change Car
            </button> */}
        </div>
    );
}

export default CarSeter;