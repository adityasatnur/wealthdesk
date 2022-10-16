import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import weatherApi from "../utils/weatherApp";
import Clock from "./Clock";
import Carousel from "./Carousel";
import Loader from "../utils/Loader";
import "./WeatherApp.scss";
import { CiLocationOn } from "react-icons/ci";
import { convertToFarenheit, convertToCelcious } from "../utils/celToFar";
const WeatherApp = () => {
  let params = useParams();
  const [todayData, setTodayData] = useState({});
  const [futureData, setFutureData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [isCelcious, setisCelcious] = useState(true);
  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
    weekday: "",
    hh: "",
    min: ""
  });
  useEffect(() => {
    futureData.length > 0 ? setShowLoader(false) : setShowLoader(true);
  }, [futureData]);
  useEffect(() => {
    weatherApi.getTodayData(params.city).then((data) => setTodayData(data));
    weatherApi.get3HoursData(params.city).then((data) => {
      let pastDay = "";
      let arr = [];
      data.forEach((day) => {
        if (pastDay !== day.weekday && day.weekday !== todayData.weekday) {
          pastDay = day.weekday;
          arr = [...arr, day];
        }
      });
      setFutureData(arr);
    });
  }, [params.city]);
  useEffect(() => {
    let newData = [];
    if (!isCelcious) {
      setTodayData({ ...todayData, temp: convertToFarenheit(todayData.temp) });
      newData = futureData.map((data) => {
        return {
          ...data,
          temp: convertToFarenheit(data.temp)
        };
      });
    } else {
      setTodayData({ ...todayData, temp: convertToCelcious(todayData.temp) });
      newData = futureData.map((data) => {
        return {
          ...data,
          temp: convertToCelcious(data.temp)
        };
      });
    }
    setFutureData(newData);
  }, [isCelcious]);

  useEffect(() => {
    let today = new Date();
    let obj = {
      day: String(today.getDate()).padStart(2, "0"),
      month: today.toLocaleString("default", { month: "long" }),
      year: today.getFullYear(),
      hh: today.getHours(),
      min: today.getMinutes()
    };
    setDate({ ...date, ...obj });
  }, []);

  return (
    <>
      {!showLoader ? (
        <div id="weatherApp">
          <section id="left">
            <img src={todayData.weatherIcon} />
            <div
              className="celcious"
              onClick={() => setisCelcious(!isCelcious)}
            >
              <span className={isCelcious ? "active" : ""}>C</span>
              <span className={!isCelcious ? "active" : ""}>F</span>
            </div>
            <div className="temp">
              <span>{todayData.temp} </span>
              <sup>o</sup>
              <div>{isCelcious ? "C" : "F"}</div>
            </div>
            <p className="date">
              {date.day} {date.month} {date.year}
            </p>
            <p className="time">
              <span className="date">{todayData.weekday}</span>{" "}
              {date.hh > 12 ? date.hh - 12 : date.hh}:{date.min}{" "}
              {date.hh > 12 ? "PM" : "AM"}
            </p>
            <div className="weather">
              <p>Wind : {todayData.wind} km/h</p>
              <p>Hum {todayData.humidity}%</p>
            </div>

            {futureData && (
              <Carousel futureData={futureData} isCelcious={isCelcious} />
            )}
          </section>
          <section id="right">
            <p className="location">
              <CiLocationOn />
              {`${todayData.city}, ${todayData.country}`}
            </p>

            <div className="clocks">
              <div>
                {todayData && (
                  <Clock sun={"Sunrise"} time={todayData.sunrise} />
                )}
              </div>
              <div>
                {todayData && <Clock sun={"Sunset"} time={todayData.sunset} />}
              </div>
            </div>
            <div className="weatherSummary">
              <div>
                Humidity<div>{todayData.humidity}%</div>
              </div>
              <div>
                WindSpeed<div>{todayData.wind} km/h</div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default WeatherApp;
