import {resolve} from 'path';

import useSWR from 'swr';

import axios from 'axios';

 

export default async function Weather(req, res) {

    
    const posizione_api = "http://ip-api.com/json/";

    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    
    const lat = req.query["lat"]
    const lon = req.query["lon"]
    
    
    async function fetchData(api_url) {
        const res = await fetch(api_url);
        const json = await res.json();
        return json;
    }
    
    
    async function fetchLocation() {
        var res = await fetch(posizione_api);
        const data = await res.json();
        console.log(data);
        return data;
      }


      async function fetchWeather() {
        // const Location = await fetchLocation();
        // const meteo_api = `http://api.openweathermap.org/data/2.5/weather?q=${Location["city"]}&appid=${API_KEY}&units=metric`;
        const meteo_api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    
        const data = await fetchData(meteo_api);
        console.log(data);
    
        var temperature = data.main.temp;
        var meteo = data.weather[0].main.toLowerCase();
        return(data);
        
      }

      

      if(API_KEY) {
        res.status(200).json({temperature : await fetchWeather()});
    } else {
        res.status(500).json({ error: "NO OPENWEATHERMAP API KEY ADDED" });
    }


    


}