import {React, useEffect, useState} from 'react';

import Icon from "../components/Icon";




export default function SwitchTheme() {
    const [theme,setTheme]= useState("OFF")

    useEffect(()=>{
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.style.setProperty("--Luminosity", "255");
      } else {
        
        document.documentElement.style.setProperty("--nuBelluGrigio", "#a1a1a1");
      }
    },[])


    return(
        <a  id="switchONOFF"  onClick={() => {if(document.documentElement.style.getPropertyValue("--Luminosity") == "0") {
          document.documentElement.style.setProperty("--Luminosity", "255")
          document.documentElement.style.setProperty("--nuBelluGrigio", "#131313");
            setTheme("OFF");
          } else {
            document.documentElement.style.setProperty("--Luminosity", "0")
            document.documentElement.style.setProperty("--nuBelluGrigio", "#a1a1a1");
            setTheme("ON");
          }
          }}>
            &nbsp;
            <Icon name={"toggle" + theme} width={21} fill="rgba(255, 255, 255, 0.3)"/>
              
          </a>
    );
}