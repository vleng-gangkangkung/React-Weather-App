import React from "react";

import "./styles.css";
export default function MoreInfo(props) {
  return (
    <div>
      <div className="row weather-description mt-5 mb-5">
        <div className="col-6">
          <div className="border-dates">
            <strong>Last updated</strong>
            <br />
            <span>{props.day}</span>, <span>{props.time}</span>
            <br />
            <span>{props.date}</span>
          </div>
        </div>

        <div className="col-6">
          <div>Humidity: {props.humidity}%</div>
          <div>Windspeed: {props.windSpeed}mph</div>
          <div>Feels like: {props.realFeel}&#176;C</div>
        </div>
      </div>
    </div>
  );
}
