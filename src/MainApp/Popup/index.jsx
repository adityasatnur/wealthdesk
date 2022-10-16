import React, { useState } from "react";
import "./Popup.scss";
import { IoCloseCircleOutline } from "react-icons/io5";

const Popup = ({ togglePopup, addToCities }) => {
  const [inputVal, setInputVal] = useState("");
  const inputHadler = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <div id="popup">
      <div id="popup-body">
        <div className="head">
          <p>Add new City</p>
          <IoCloseCircleOutline onClick={togglePopup} />
        </div>
        <input
          type="text"
          name=""
          id="cityName"
          placeholder="Add title"
          value={inputVal}
          onChange={(e) => inputHadler(e)}
        />
        <button className="btn close" onClick={togglePopup}>
          Close
        </button>
        <button className="btn add" onClick={() => addToCities(inputVal)}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Popup;
