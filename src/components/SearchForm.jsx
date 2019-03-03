import React, { Component } from "react";

const cityList = [
  {
    id: 1,
    name: "Leavenworth",
    hours: 2.5,
    latlong: "47.5962%2C-120.6615"
  },
  {
    id: 2,
    name: "Yakima",
    hours: 2.2,
    latlong: "46.6021%2C-120.5059"
  },
  {
    id: 3,
    name: "Tacoma",
    hours: 0.75,
    latlong: "47.2529%2C-122.4443"
  }
];

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      travelTime: "",
      weather: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitHours = this.onSubmitHours.bind(this);
    this.determineSuitableCities = this.determineSuitableCities.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  determineSuitableCities(travelTime) {
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].hours < travelTime) {
        this.setState({ location: cityList[i].latlong });
        console.log(`determine cities set state to ${i}`);
      } else {
        this.setState({ location: "" });
      }
      console.log(
        `travel time is ${travelTime} determine cities ran time ${i}`
      );
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const search = {
      location: this.state.location
    };
    let url = `https://api.weather.gov/points/${search.location}/forecast`;

    fetch(url, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => this.setState({ weather: data.properties.periods }));
  }

  onSubmitHours(e) {
    e.preventDefault();
    this.determineSuitableCities(this.state.travelTime);
    //let location = "47.6062%2C-122.3321";

    // const travelTime = this.state.travelTime;
    // for (let i = 0; i < cityList.length; i++) {
    //   if (cityList[i].hours < travelTime) {
    //     this.setState({ location: cityList[i].latlong });
    //   }
    // }

    const search = {
      location: this.state.location
    };
    let url = `https://api.weather.gov/points/${search.location}/forecast`;
    console.log(url);

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

        <form onSubmit={this.onSubmitHours}>
          <div>
            <label>Hours willing to travel</label>
            <br />
            <input
              type="number"
              name="travelTime"
              onChange={this.onChange}
              value={this.state.travelTime}
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
