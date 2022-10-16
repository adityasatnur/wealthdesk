import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Popup from "./Popup";
import CitiesList from "./CitiesList";
import "./MainApp.scss";
import { BsCaretDownFill } from "react-icons/bs";

const MainApp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [ascendingSort, isAscendingSort] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  useEffect(() => {
    let cities = JSON.parse(window.localStorage.getItem("cities"));
    if (cities && cities.length > 0) {
      setCities(cities);
      setFilteredCities(cities);
    }
  }, []);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const addToCities = (val) => {
    if (val) {
      let newCitiesList = [...cities, val.toLowerCase()];
      window.localStorage.setItem("cities", JSON.stringify(newCitiesList));
      setCities([...cities, val]);
      setFilteredCities([...cities, val]);
      togglePopup();
    }
  };
  const searchHandler = (val) => {
    let filteredCities = cities.filter((city) => city.includes(val));
    setFilteredCities(filteredCities);
  };
  const sortCities = () => {
    let sortedCities = cities.sort();
    if (!ascendingSort) {
      setFilteredCities([...sortedCities]);
      isAscendingSort(true);
    } else {
      sortedCities.reverse();
      setFilteredCities([...sortedCities]);
      isAscendingSort(false);
    }
  };
  const deleteCity = (cityVal) => {
    let filteredCities = cities.filter((city) => city !== cityVal);
    window.localStorage.setItem("cities", JSON.stringify(filteredCities));
    setFilteredCities(filteredCities);
    setCities(filteredCities);
  };
  return (
    <section id="mainApp">
      <div className="header">
        <p>List of cities</p>
        <SearchBar togglePopup={togglePopup} searchHandler={searchHandler} />
      </div>
      {isPopupOpen ? (
        <Popup togglePopup={togglePopup} addToCities={addToCities} />
      ) : null}
      <div className="tableHeader">
        <div>No.</div>
        <div onClick={sortCities}>Name</div>
        <div>
          <BsCaretDownFill className={ascendingSort ? "normal" : "rotated"} />
        </div>
      </div>
      {cities.length ? (
        <CitiesList cities={filteredCities} deleteCity={deleteCity} />
      ) : null}
    </section>
  );
};
export default MainApp;
