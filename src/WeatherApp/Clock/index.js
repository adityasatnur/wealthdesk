import React, { useState, useEffect, useRef } from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";

import "./Clock.scss";
const Clock = ({ sun, time }) => {
  const [timeer, setTimeer] = useState({});
  const hour = useRef();
  const minute = useRef();

  useEffect(() => {
    if (time) {
      const dt_timezone = new Date(time * 1e3);
      const hr = dt_timezone.getHours();
      const min = dt_timezone.getMinutes();
      setTimeer({
        hr: hr > 12 ? hr - 12 : hr,
        min,
        unit: hr > 12 ? "PM" : "AM"
      });
      const hr_rotation = 30 * hr + min / 2; //converting current time
      const min_rotation = 6 * min;
      hour.current.style.transform = `rotate(${hr_rotation}deg)`;
      minute.current.style.transform = `rotate(${min_rotation}deg)`;
    }
  }, [time]);
  return (
    <>
      <div>{sun}</div>
      <div className="clock">
        <div id="clockContainer">
          <div id="hour" ref={hour}></div>
          <div id="minute" ref={minute}></div>
        </div>
        <div>
          {`${timeer.hr} : ${timeer.min} `}
          <span>{`${timeer.unit}`}</span>
        </div>
        <div>{sun === "Sunrise" ? <WiSunrise /> : <WiSunset />}</div>
      </div>
    </>
  );
};
export default Clock;
