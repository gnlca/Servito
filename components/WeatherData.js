import React from "react";

import Image from 'next/image';

import weatherEmoji from './weatherEmoji.json';

function WeatherData() {
  //JSON WEATHER API
  /*const [loading, setLoading] = React.useState(true);*/
  const [temp, setTemp] = React.useState();
  const [weather, setWeather] = React.useState();
  const [location, setLocation] = React.useState();

  const WeatherAPI = `/api/Weather`;

  const weatherIcon = `http://openweathermap.org/img/wn/`

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  async function fetchData(api_url) {
    const res = await fetch(api_url);
    const json = await res.json();
    return json;
  }

  function fetchLocation() {
    if (!navigator.geolocation) {
      alert("LA LOCALIZZAZIONE NON È SUPPORTATA SUL TUO BROWSER ");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        return success(position);
      });
    }
  }

  async function fetchWeather(api_url) {
    const data = await fetchData(api_url);
    console.log(data);
    setTemp(data.temperature.main.temp);
    // setWeather(data.temperature.weather[0].description.toLowerCase());
    setWeather({
      description: data.temperature.weather[0].description.toLowerCase(),
      icon: data.temperature.weather[0].icon
    });
    setLocation(data.temperature.name);
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);

    if (lat && lon) {
      const url = WeatherAPI + `?lat=${lat}&lon=${lon}`;
      console.log(url);
      fetchWeather(url);
    }
  }

  React.useEffect(() => {
    // console.log(weatherEmoji);
    fetchLocation();
  }, []);

  return (
    <div className="WeatherData">
      {(temp && weather) ? (
        <span id="weather">
          {temp}° {weather.description}  {weatherEmoji[weather.description][(new Date().getHours()<18)?"day":"night"]} {/*<Image id="weatherIcon"src={weatherIcon + weather.icon + "@2x.png"} width="30px" height="30px" />*/}  in {location}
          {/* in {location.city}x, {location.country}*/}.
        </span>
      ) : null}
    </div>
  );
}
export default WeatherData;
