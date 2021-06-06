import {React, useEffect, useState} from 'react';
import Image from "next/image";

import Icon from "../components/Icon";

import ToggleON from '../assets/img/toggleON.svg';
import ToggleOFF from '../assets/img/toggleOFF.svg';



export default function SwitchTheme() {
    const [theme,setTheme]= useState(0)

    useEffect(()=>{
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.style.setProperty("--Luminosity", "255");
      document.documentElement.style.setProperty("--nuBelluGrigio", "#131313");
      setTheme(0)
    } else {    
      document.documentElement.style.setProperty("--Luminosity", "0");
      document.documentElement.style.setProperty("--nuBelluGrigio", "#afafaf");
      setTheme(1)
    }

    },[])

    
    return(
        <a  id="switchONOFF"   onClick={() => {if(document.documentElement.style.getPropertyValue("--Luminosity") == "0") {
          document.documentElement.style.setProperty("--Luminosity", "255");
          document.documentElement.style.setProperty("--nuBelluGrigio", "#131313");
            setTheme(0);
          } else {
            document.documentElement.style.setProperty("--Luminosity", "0");
            document.documentElement.style.setProperty("--nuBelluGrigio", "#afafaf");
            setTheme(1);
          }

          

          }}>
            &nbsp;
            {theme ? <ToggleON/> : <ToggleOFF />}
              
          </a>
    );
}