import {React, useEffect, useState}  from 'react';


import SearchBox from './SearchBox';
import WeatherData from './WeatherData';
import Icon from './Icon';


export default function Home() {




    return (
      <div className="Home grid rowGap2">
        {/* logo */}
        <Icon name="logo" width={100} height={25} fill="var(--Bianco)" />

        {/* Barra di ricerca */}
        <SearchBox />

        {/* Meteo */}
        <span className="extendedFont" style={{ marginBottom: "1em" }}>
          <WeatherData />
        </span>
      </div>
    );
}