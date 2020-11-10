import React, { Component } from "react";
class WeatherResults extends Component {
  state = {};
  render() {
    return (
      <ul className="weather-results">
        <li className="info">
          <span className="info-key">temp:</span>
          <span className="info-val">22</span>
        </li>
        <li className="info">
          <span className="info-key">temp:</span>
          <span className="info-val">22</span>
        </li>
      </ul>
    );
  }
}

export default WeatherResults;
