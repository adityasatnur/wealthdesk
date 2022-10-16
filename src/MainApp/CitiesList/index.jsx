import React from "react";
import City from "./City";
const CitiesList = ({ cities, deleteCity }) => {
  return (
    <>
      {cities.map((city, index) => (
        <City data={city} index={index + 1} deleteCity={deleteCity} />
      ))}
    </>
  );
};
export default CitiesList;
