import React from "react";

import "./styles.css";
export default function MoreInfo() {
  return (
    <div>
      <div className="row weather-description mt-5 mb-5">
        <div className="col-6">
          <div className="border-dates">
            <strong>Last updated</strong>
            <br />
            <span id="day-name">Wednesday</span>, <span id="time">17:00 </span>
            <br />
            <span id="date">24</span> <span id="month">September</span>
          </div>
        </div>

        <div className="col-6">
          <div id="humidity">Humidity: 1%</div>
          <div id="wind">59% Wind: 7 mph</div>
          <div id="wind">Feels like: 10°C</div>
        </div>
      </div>
    </div>
  );
}
