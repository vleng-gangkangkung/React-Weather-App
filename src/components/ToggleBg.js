import React from "react";

import "../styles.css";
export default function ToggleBg() {
  return (
    <div class="col-2">
      <div class="dayNight">
        <div class="line-shadow daytime">
          <a href="#" onclick="changeLight()" title="Change to light theme">
            LIGHT
          </a>
        </div>
      </div>
      <div class="dayNight">
        <div class="evening">
          <a href="#" onclick="changeDark()" title="Change to dark theme">
            DARK
          </a>
        </div>
      </div>
    </div>
  );
}
