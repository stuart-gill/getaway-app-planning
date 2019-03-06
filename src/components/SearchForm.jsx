import React, { Component } from "react";

const cityList = [
  {
    id: 1,
    name: "Leavenworth",
    hours: 2.5,
    latlong: "47.5962%2C-120.6615",
    lodging: "https://www.airbnb.com/a/Leavenworth--United-States"
  },
  {
    id: 2,
    name: "Yakima",
    hours: 1.9,
    latlong: "46.6021%2C-120.5059",
    lodging: "https://www.airbnb.com/s/Yakima--WA"
  },
  {
    id: 3,
    name: "Tacoma",
    hours: 0.75,
    latlong: "47.2529%2C-122.4443",
    lodging: "https://www.airbnb.com/a/Tacoma--United-States"
  }
];

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "150px 150px 150px 150px 150px",
  gridTemplateRows: "50px 150px 150px 150px",
  textAlign: "center"
};

const cityName = {
  textAlign: "center",
  gridColumnStart: "1",
  gridColumnEnd: "6"
};

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelTime: "1.5",
      weather: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmitHours = this.onSubmitHours.bind(this);
    this.determineSuitableCities = this.determineSuitableCities.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  determineSuitableCities(travelTime) {
    let locArray = [];
    for (let i = 0; i < cityList.length; i++) {
      if (cityList[i].hours < travelTime) {
        console.log(`determine cities returns ${cityList[i].name}`);
        locArray.push({ latlong: cityList[i].latlong, name: cityList[i].name });
      } else {
        console.log("this loc is not suitable");
      }
    }
    return locArray;
  }

  onSubmitHours(e) {
    e.preventDefault();
    let locations = this.determineSuitableCities(
      this.props.acceptableTravelTime
    );
    let tempArray = [];
    let promises = [];

    for (let loc of locations) {
      let url = `https://api.weather.gov/points/${loc.latlong}/forecast`;
      console.log(url);

      let promise = fetch(url, {
        method: "GET"
      })
        .then(res => res.json())
        // .then((data) => console.log(data.properties.periods));
        .then(data =>
          tempArray.push({
            name: loc.name,
            locWeather: data.properties.periods
          })
        );

      promises.push(promise);
    }

    Promise.all(promises).then(() => {
      this.setState({ weather: tempArray });
    });
  }

  render() {
    console.log(this.state.weather);
    let weatherItems = [];
    let thisWeatherItem;
    for (let i = 0; i < this.state.weather.length; i++) {
      thisWeatherItem = this.state.weather[i].locWeather.map(item => (
        <div key={item.number}>
          <p>
            {item.name}: {item.temperature}
            {/* {item.detailedForecast} */}
          </p>
          <img src={item.icon} alt={item.name} />
        </div>
      ));
      let name = (
        <div key={i} style={cityName}>
          <h2>{this.state.weather[i].name}</h2>
        </div>
      );
      // thisWeatherItem.unshift(name);
      console.log(`this weather item = ${thisWeatherItem}`);
      weatherItems.push(name);
      weatherItems.push(thisWeatherItem);
    }

    // ~~~This method worked when this.state.weather held only weather arrays, not weather objects with city names and weather combined
    // for (let city of this.state.weather) {
    //   thisWeatherItem = city.map(item => (
    //     <div key={item.number}>
    //       <h3>{item.name}: {item.detailedForecast}</h3>
    //     </div>
    //   ));
    //   weatherItems.push(thisWeatherItem);
    // }

    return (
      <div>
        <h1>New Search</h1>

        <form onSubmit={this.onSubmitHours}>
          <button type="submit"> Submit </button>
        </form>
        <div style={gridStyle}>{weatherItems}</div>
      </div>
    );
  }
}
