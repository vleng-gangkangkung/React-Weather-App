import React from "react";
import ForecastDay from "./components/ForecastDay.jsx";

import "./styles.css";
export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className=" forecastHeading mt-5 ml-3">
          FORECAST FOR THE WEEK
          <span
            class="forecastCelcius"
            title="Temperature displayed in &#176;Celcius"
          >
            &#176;C
          </span>
        </div>
      </div>
      <div className="row">
        <span className="border-left-forecast"></span>
        <ForecastDay day="THU" date="29/12" maxTemp={20} minTemp={15} />
        <ForecastDay day="FRI" date="30/12" maxTemp={20} minTemp={15} />
        <ForecastDay day="SAT" date="31/12" maxTemp={20} minTemp={15} />
        <ForecastDay day="SUN" date="01/12" maxTemp={20} minTemp={15} />
        <ForecastDay day="MON" date="02/12" maxTemp={20} minTemp={15} />
      </div>
    </div>
  );
}
