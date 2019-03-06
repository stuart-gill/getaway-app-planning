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
            onChange={this.props.handleChangeSlider}
          />
          <h3 style={headerStyle} id="showTemp">
            {this.props.temperature}°F
          </h3>
        </form>
      </div>
    );
  }
}
