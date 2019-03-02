import React, { Component } from "react";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      weather: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    //let location = "47.6062%2C-122.3321";
    const search = {
      location: this.state.location
    };
    let url = `https://api.weather.gov/points/${search.location}/forecast`;

    fetch(url, {
      method: "GET"
    })
      .then((res) => res.json())
      // .then((data) => console.log(data.properties.periods));
      .then((data) => this.setState({ weather: data.properties.periods }));
  }

  render() {
    const weatherItems = this.state.weather.map((item) => (
      <div key={item.number}>
        <h3>{item.name}</h3>
        <p>{item.temperature}</p>
      </div>
    ));

    return (
      <div>
        <h1>New Search</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Location in Lat and Long</label>
            <br />
            <input
              type="text"
              name="location"
              onChange={this.onChange}
              value={this.state.location}
            />
          </div>
          <br />
          <button type="submit"> Submit </button>
        </form>
        {weatherItems}
      </div>
    );
  }
}
