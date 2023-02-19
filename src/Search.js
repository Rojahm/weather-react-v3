import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  let form = (
    <form onSubmit={handleCity}>
      <input type="text" placeholder="Search a City" onChange={handleQuery} />
      <input type="submit" value="submit" />
    </form>
  );

  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [condition, setCondition] = useState("");
  const [conditionIcon, setConditionIcon] = useState("");

  function handleResponse(response) {
    setTemp(Math.round(response.data.temperature.current));
    setFeelsLike(Math.round(response.data.temperature.feels_like));
    setHumidity(Math.round(response.data.temperature.humidity));
    setWind(Math.round(response.data.wind.speed));
    setCondition(response.data.condition.description);
    setConditionIcon(response.data.condition.icon_url);
    console.log(response.data.condition.icon_url);
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }
  function handleCity(event) {
    event.preventDefault();
    setCity(query);
    let apiKey = "a7c7f51a8a5abc24e0tb69o4ff6018a3";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (temp) {
    return (
      <div className="Search">
        {form}
        <Weather
          city={city}
          temp={temp}
          feelsLike={feelsLike}
          humidity={humidity}
          wind={wind}
          condition={condition}
          conditionIcon={conditionIcon}
        />
      </div>
    );
  } else {
    return <div className="Search">{form}</div>;
  }
}
export default Search;
