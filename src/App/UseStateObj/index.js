import { useState } from "react";

export default function UseStateObj() {
  const [car, setCar] = useState(
    {
      id: 1,
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red",
    },
    {
      id: 2,
      brand: "Dodge",
      model: "Charger",
      year: "1969",
      color: "black",
    }
  );

  const updateCar = () => {
    setCar((previousState) => {
      return { ...previousState, color: "black" };
    });
  };

  return (
    <>
      <h1>My fav car is a {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <div>
        <button onClick={updateCar}>Paint it black!</button>
      </div>
    </>
  );
}
