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
            <span>Wednesday</span>, <span>17:00 </span>
            <br />
            <span>24 September</span>
          </div>
        </div>

        <div className="col-6">
          <div>Humidity: 1%</div>
          <div>59% Wind: 7 mph</div>
          <div>Feels like: 10°C</div>
        </div>
      </div>
    </div>
  );
}
