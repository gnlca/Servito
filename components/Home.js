import {React, useEffect, useState}  from 'react';


import SearchBox from './SearchBox';
import WeatherData from './WeatherData';

import Logo from '../public/logo.svg'

export default function Home() {




    return (
      <div className="Home grid center rowGap22">
        {/* logo */}
        <Logo  fill="var(--Bianco)" width={100} />

        {/* Barra di ricerca */}
        <SearchBox />

        {/* Meteo */}
        <span className="extendedFont" >
          <WeatherData />
        </span>
      </div>
    );
}