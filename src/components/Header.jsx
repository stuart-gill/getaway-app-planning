import React, { Component } from "react";
import { connect } from "react-redux";
import { addWeather, sortCities, addTemperature } from "../actions"; //pass these into second argument in connect() and you don't need to mapDisptachToProps or call dispatch anywhere

// function mapDispatchToProps(dispatch) {
//   return {
//     addWeather: reduxWeather => dispatch(addWeather(reduxWeather)),
//     sortCities: reduxTime => dispatch(sortCities(reduxTime))
//   };
// }

class ConnectedHeader extends Component {
  constructor(props) {
    super(props);
    //this.state sets default state of header settings... local state only, not redux
    this.state = {
      temperature: "75",
      acceptableTravelTime: "1.5",
      acceptableWeather: "sunny"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //reduxWeather state is changed only on submit, not on change
    const reduxWeather = this.state.acceptableWeather;
    const reduxTemperature = this.state.temperature;
    //by putting reduxWeather in curlies below the payload becomes an object {reduxweather: "sunny"}
    this.props.addWeather({ reduxWeather });
    this.props.addTemperature({ reduxTemperature });
    //this is the Redux part-- action dispatched
    // this.setState({ acceptableWeather: "sunny" }); (if it's desired to reset local state)
    const reduxTime = this.state.acceptableTravelTime;
    this.props.sortCities({ reduxTime });
  }

  render() {
    const headerStyle = {
      display: "inline"
    };

    return (
      <div id="navigation">
        <h3 style={headerStyle}>75+SUNNY</h3>
        <form style={headerStyle} onSubmit={this.handleSubmit}>
          <input
            type="range"
            id="temperatureSlider"
            min="20"
            defaultValue="75"
            max="100"
            step="2"
            name="temperature"
            onChange={this.handleChange}
          />
          <h3 style={headerStyle} id="showTemp">
            {this.state.temperature}°F
          </h3>

          <input
            type="range"
            id="hourSlider"
            min=".5"
            defaultValue="1.5"
            max="8"
            step=".5"
            name="acceptableTravelTime"
            onChange={this.handleChange}
          />
          <h3 style={headerStyle} id="showHours">
            {this.state.acceptableTravelTime}h
          </h3>

          <select name="acceptableWeather" onChange={this.handleChange}>
            <option value="sunny">SUNNY</option>
            <option value="cloudy">CLOUDY</option>
            <option value="rain">RAIN</option>
            <option value="snow">SNOW</option>
            <option value="fog">FOG</option>
          </select>
          <h3 style={headerStyle}>{this.state.acceptableWeather}</h3>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
          </button>
        </form>
      </div>
    );
  }
}

// const Header = connect(
//   null,
//   mapDispatchToProps
// )(ConnectedHeader);
// export default Header;

const Header = connect(
  null,
  { addWeather, addTemperature, sortCities } //this is taking the place of mapdispatchtoprops--connect() automatically puts these action creators into a dispatch function
)(ConnectedHeader);
export default Header;

//connect tag is special because it can communicate directly with provider to get store state using the "context" system, regardless of how high or low this component is in the tree
