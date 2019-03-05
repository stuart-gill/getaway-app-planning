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
    hours: 1.9,
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
      weather: [],
      tick: 0
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitHours = this.onSubmitHours.bind(this);
    this.determineSuitableCities = this.determineSuitableCities.bind(this);

    // setInterval(() => {
    //   console.log(this.state.weather);
    // }, 2000);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     let newTick = (this.state.tick += 1);
  //     this.setState({ tick: newTick });
  //   }, 1000);
  // }

  determineSuitableCities(travelTime) {
    let locArray = [];
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].hours < travelTime) {
        console.log(`determine cities returns ${cityList[i].name}`);
        locArray.push(cityList[i].latlong);
      } else {
        console.log("this loc is not suitable");
      }
    }
    return locArray;
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
      .then(res => res.json())
      .then(data => this.setState({ weather: data.properties.periods }));
  }

  onSubmitHours(e) {
    e.preventDefault();
    let locations = this.determineSuitableCities(this.state.travelTime);
    let tempArray = [];
    let promises = [];

    for (let loc of locations) {
      let url = `https://api.weather.gov/points/${loc}/forecast`;
      console.log(url);

      let promise = fetch(url, {
        method: "GET"
      })
        .then(res => res.json())
        // .then((data) => console.log(data.properties.periods));
        .then(data => tempArray.push(data.properties.periods));

      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      this.setState({ weather: tempArray });
    });
    // setTimeout(() => {
    // this.setState({ weather: tempArray });
    // }, 1);
    this.setState({ cats: true });
    console.log(this.state.cats);
  }

  render() {
    console.log(this.state.weather);
    let weatherItems = [];
    let thisWeatherItem;
    for (let city of this.state.weather) {
      thisWeatherItem = city.map(item => (
        <div key={item.number}>
          <h3>{item.name}</h3>
          <p>{item.temperature}</p>
        </div>
      ));
      weatherItems.push(thisWeatherItem);
    }

    return (
      <div>
        <h1>New Search</h1>
        {/* <form onSubmit={this.onSubmit}>
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
        </form> */}

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
        <h2>{this.state.tick}</h2>

        {weatherItems}
      </div>
    );
  }
}
