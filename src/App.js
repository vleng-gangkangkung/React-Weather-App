import React from "react";
import Cities from "./Cities";
import Header from "./Header";
import Icon from "./Icon";
import Temperature from "./Temperature";
import Description from "./Description";
import MoreInfo from "./MoreInfo";
import Forecast from "./Forecast";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div id="panel" class="lightClass">
          <div className="row">
            <div className="col-md-10">
              <Cities />
            </div>
          </div>
          <Header />

          <div className="cityName mb-3 mt-4">SAN FRANCISCO</div>
          <div className="row line-shadow pb-2">
            <div className="col-md-7">
              <Temperature />
              <Description />
              <MoreInfo />
            </div>
            <div className="col-md-5 mt-3">
              <Icon />
            </div>
          </div>
          <Forecast />
        </div>
      </div>
      <small>
        Coded and designed by
        <a href="https://vleng.co.uk">&nbsp;Vanessa Leng&nbsp;</a>|
        <a
          href="https://github.com/vleng-gangkangkung/my-weather-app"
          title="View on Github"
        >
          &nbsp;Open Source Code
        </a>
      </small>
    </div>
  );
}
