import {React, useEffect, useState} from 'react';

import Icon from "../components/Icon";

export default function SwitchTheme() {
    const [theme,setTheme]= useState("OFF")

    return(
        <button  id="switchONOFF"  onClick={() => {if(document.documentElement.style.getPropertyValue("--Luminosity") == "0") {
            document.documentElement.style.setProperty("--Luminosity", "255")
            setTheme("OFF");
          } else {
            document.documentElement.style.setProperty("--Luminosity", "0")
            setTheme("ON");
          }
          }}>
            
            <Icon name={"toggle" + theme} width={24} fill="rgba(255, 255, 255, 0.3)"/>
              
          </button>
    );
}