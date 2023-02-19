import React from "react";

function Weather(props) {
  if (props.temp) {
    return (
      <div className="Weather">
        <h2>
          it is currently {props.temp}°C in {props.city}
        </h2>
        <h3>{props.condition}</h3>
        <img src={props.conditionIcon} alt="Weather Condition" />
        <h3>Feels Like, {props.feelsLike}°C</h3>
        <h3>Humidity is {props.humidity}%</h3>
        <h3>Wind Speed is {props.wind} km/h</h3>
      </div>
    );
  } else {
    return (
      <div className="Weather">
        <h2>Loading</h2>
      </div>
    );
  }
}
export default Weather;
