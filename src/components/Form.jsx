import React, { Component } from "react";
class Form extends Component {
  state = {};
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input name="city" type="text" placeholder="city.." />
        <input name="country" type="text" placeholder="country.." />
        <button type="submit">get weather</button>
      </form>
    );
  }
}

export default Form;
