import React from "react";

export default function WeatherListDisplay(props) {
  return (
    <div>
      <h2>{props.daysWeather.name}</h2>
      <img src={props.daysWeather.icon} alt="weather list" />
      <p>
        {props.daysWeather.temperature} + {props.daysWeather.shortForecast}
      </p>
    </div>
  );
}
