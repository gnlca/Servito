import React from "react";




function WeatherData() {
  //JSON WEATHER API
  /*const [loading, setLoading] = React.useState(true);*/
  const [temp, setTemp] = React.useState();
  const [weather, setWeather] = React.useState("");
  const [location, setLocation] = React.useState();

  const WeatherAPI = `/api/Weather`;
  const posizione_api = "https://ipapi.co/json";

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;




  async function fetchData(api_url) {
    const res = await fetch(api_url);
    const json = await res.json();
    return json;
}



function fetchLocation() {

  if(!navigator.geolocation) {
    alert("LA LOCALIZZAZIONE NON È SUPPORTATA SUL TUO BROWSER ");
  } else {
    navigator.geolocation.getCurrentPosition((position)=>{return(success(position))});
  }
}

async function fetchWeather(api_url) {

  const data = await fetchData(api_url);
  console.log(data);
  setTemp(data.temperature.main.temp)
  setWeather(data.temperature.weather[0].main.toLowerCase())
  setLocation(data.temperature.name);
}



function success(position) {
  const lat  = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(lat)
  console.log(lon)

  if(lat && lon) {
    const url = WeatherAPI + `?lat=${lat}&lon=${lon}`;
    console.log(url);
    fetchWeather(url);

  }
  
  
}




  React.useEffect(() => {

    fetchLocation();

  
  }, []);

  return (
    <div className="WeatherData">
      {temp ? (<span id="weather">{temp}° {weather} &#x1F319; in {location}{/* in {location.city}x, {location.country}*/}.</span>) : null}
    </div>
  );
}
export default WeatherData;
