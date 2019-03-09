import React, { Component } from "react";
import { connect } from "react-redux";
import { addWeather } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addWeather: (reduxWeather) => dispatch(addWeather(reduxWeather))
  };
}

class ConnectedHeader extends Component {
  constructor(props) {
    super(props);
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
    const acceptableWeather = this.state.acceptableWeather;
    this.props.addWeather({ reduxWeather: acceptableWeather }); //this is the Redux part-- action dispatched
    // this.setState({ acceptableWeather: "sunny" }); (if it's desired to reset local state)
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

const Header = connect(
  null,
  mapDispatchToProps
)(ConnectedHeader);
export default Header;
