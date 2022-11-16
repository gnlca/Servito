import config from "../../UserConfig.json";

export default async function Weather(req, res) {
  const posizione_api = "http://ip-api.com/json/";
  let meteo_api = `http://api.openweathermap.org/data/2.5/weather?units=metric`;

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const city = config.location;

  var lat = req.query["lat"] ? req.query["lat"] : null;
  var lon = req.query["lon"] ? req.query["lon"] : null;

  async function fetchData(api_url) {
    const res = await fetch(api_url);
    const json = await res.json();
    return json;
  }

  async function fetchLocation() {
    var data = await fetchData(posizione_api);
    lat = data["lat"];
    lon = data["lon"];
  }

  async function fetchWeather() {
    let latlon = `&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let loc = `&q=${city}&appid=${API_KEY}`;
    var url = meteo_api + (lat && lon ? latlon : loc);

    let data = await fetchData(url);
    // console.log(data.cod);
    if (data.cod === "404") {
      await fetchLocation();
      data = await fetchWeather();
    }
    // var temperature = data.main.temp;
    // var meteo = data.weather[0].main.toLowerCase();
    return data;
  }

  if (API_KEY && ((lat && lon) || city)) {
    res.status(200).json({ temperature: await fetchWeather() });
  } else if (!API_KEY || API_KEY === "") {
    res.status(500).json({ error: "NO OPENWEATHERMAP API KEY ADDED" });
  } else {
    await fetchLocation();
    console.error("HTML5 GEOLOCATION REFUSED, USING SERVER LOCATION");
    res.status(200).json({ temperature: await fetchWeather() });
    // res.status(500).json({ error: "No latitude and longitude provided" });
  }
}
