import React, { Component } from "react";
class WeatherResults extends Component {
  state = {};
  render() {
    const data = this.props.weatherData;
    return (
      <ul className="weather-results">
        {data.tempreature && (
          <li className="info">
            <span className="info-key">tempreature:</span>
            <span className="info-val">{data.tempreature}</span>
          </li>
        )}
        {data.humidity && (
          <li className="info">
            <span className="info-key">humidity:</span>
            <span className="info-val">{data.humidity}</span>
          </li>
        )}
        {data.city && (
          <li className="info">
            <span className="info-key">city:</span>
            <span className="info-val">{data.city}</span>
          </li>
        )}
        {data.country && (
          <li className="info">
            <span className="info-key">country:</span>
            <span className="info-val">{data.country}</span>
          </li>
        )}
        {data.description && (
          <li className="info">
            <span className="info-key">description:</span>
            <span className="info-val">{data.description}</span>
          </li>
        )}
        {data.error && <li className="info">{data.error}</li>}
      </ul>
    );
  }
}

export default WeatherResults;
