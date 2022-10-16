import React from "react";
import "./City.scss";
import { Link } from "react-router-dom";
// import {MdDelete} from ''
import { MdDelete } from "react-icons/md";

const City = ({ data, index, deleteCity }) => {
  const del = (val) => {
    deleteCity(val);
  };
  return (
    <div className="city">
      <span>{index}.</span>
      <Link to={data}>{data}</Link>
      <MdDelete className="delete" onClick={() => del(data)} />
    </div>
  );
};
export default City;
