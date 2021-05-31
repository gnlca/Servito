import React from 'react';
import axios from 'axios';

import useSWR from 'swr'



function WeatherData() {


    //JSON WEATHER API
    /*const [loading, setLoading] = React.useState(true);*/
    const [temp,setTemp] = React.useState();
    const [weather,setWeather] = React.useState('');
    const [location,setLocation] = React.useState("");
    
    

    const posizione_api = "https://ipapi.co/json";
    
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY; 
    

    



    async function fetchData(api_url) {
        const res =  await fetch(api_url);
        const json = await res.json()
        console.log(json);
        return(json);
    }
    
    async function fetchLocation() {
        var data = await fetchData(posizione_api);
        console.log(data["city"]);
        setLocation(data["city"]);
        return(data["city"]);
    }
    

    

    async function fetchWeather() {
        
        const pos = await fetchLocation()
       
        var meteo_api = `http://api.openweathermap.org/data/2.5/weather?q=${pos}&appid=${API_KEY}&units=metric`;
        console.log(meteo_api);
        const data = await fetchData(meteo_api);

        var temperature = data.main.temp;
        var meteo = data.weather[0].main.toLowerCase();

        console.log(data);
        setWeather(meteo);
        setTemp(temperature);

    }



    React.useEffect(() => {

        
        process.env.NEXT_PUBLIC_WEATHER_API_KEY ? fetchWeather() : console.log("NO OPENWEATHER API KEY ADDED");
    },[]);

    return(
        <div className="WeatherData">
            {temp ? <span>{temp}° {weather}{/* in {location.city}x, {location.country}*/}.</span> : null}
        </div>
    );
}
export default WeatherData;