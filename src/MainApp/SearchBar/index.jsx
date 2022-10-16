import React, { useState } from "react";
import "./SearchBar.scss";
const SearchBar = ({ togglePopup, searchHandler }) => {
  const [inputVal, setInputVal] = useState("");
  const inputHadler = (e) => {
    setInputVal(e.target.value);
    searchHandler(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        id="searchText"
        placeholder="Search"
        onChange={(e) => inputHadler(e)}
        value={inputVal}
      />
      <button className="btn add" type="button" onClick={togglePopup}>
        + Add New
      </button>
    </div>
  );
};
export default SearchBar;
