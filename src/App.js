import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form";
import WeatherResults from "./components/WeatherResults";
import axios from "axios";
class App extends Component {
  state = {
    tempreature: "",

    city: "",

    country: "",

    humidity: "",

    description: "",

    error: "",
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (city && country) {
      const API_KEY = "73e180bfc84aef00782367406195238d";
      const res = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const dataWeather = res.data;
      this.setState({
        tempreature: dataWeather.main.temp,

        city: dataWeather.name,

        country: dataWeather.sys.country,

        humidity: dataWeather.main.humidity,

        description: dataWeather.weather[0].description,
      });
    } else {
      this.setState({
        tempreature: "",

        city: "",

        country: "",

        humidity: "",

        description: "",

        error: "please fill field",
      });
    }
  };
  render() {
    return (
      <div className="App">
        <div className="app-cont">
          <Form getWeather={this.getWeather} />
          <WeatherResults weatherData={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
