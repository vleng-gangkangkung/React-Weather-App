import React from "react";
import "./styles.css";

export default function Temperature() {
  return (
    <div className="temp mt-4">
      <span id="main-temp-display">25</span>
      <span class="degreeSymbol">&#176;</span>
      <span id="celcius" class="mainUnit">
        <a href="#" title="Convert to Celcius">
          C
        </a>
      </span>
      <span id="fahrenheit" class="secondaryUnit" title="Convert to Fahrenheit">
        <a href="#">F</a>
      </span>
      <div></div>
    </div>
  );
}
