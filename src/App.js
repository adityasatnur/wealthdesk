import React from "react";
import MainApp from "./MainApp";
import WeatherApp from "./WeatherApp";
import "./styles.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainApp />}></Route>
          <Route path="/:city" element={<WeatherApp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
