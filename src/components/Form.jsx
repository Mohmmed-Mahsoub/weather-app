import React, { Component } from "react";
class Form extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type="text" placeholder="city.." />
        <input type="text" placeholder="country.." />
        <button type="submit">get weather</button>
      </form>
    );
  }
}

export default Form;
