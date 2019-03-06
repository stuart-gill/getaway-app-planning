import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const headerStyle = {
      display: "inline"
    };

    return (
      <div id="navigation">
        <h3 style={headerStyle}>75+SUNNY</h3>
        <form style={headerStyle}>
          <input
            type="range"
            id="temperatureSlider"
            min="20"
            defaultValue="75"
            max="100"
            step="2"
            name="temperature"
            onChange={this.props.handleChange}
          />
          <h3 style={headerStyle} id="showTemp">
            {this.props.temperature}°F
          </h3>

          <input
            type="range"
            id="hourSlider"
            min=".5"
            defaultValue="1.5"
            max="8"
            step=".5"
            name="acceptableTravelTime"
            onChange={this.props.handleChange}
          />
          <h3 style={headerStyle} id="showHours">
            {this.props.acceptableTravelTime}h
          </h3>

          <select name="acceptableWeather" onChange={this.props.handleChange}>
            <option value="sunny">SUNNY</option>
            <option value="cloudy">CLOUDY</option>
            <option value="rain">RAIN</option>
            <option value="snow">SNOW</option>
            <option value="fog">FOG</option>
          </select>
          <h3 style={headerStyle}>{this.props.acceptableWeather}</h3>
        </form>
      </div>
    );
  }
}
