import React, { useState, useEffect, useRef } from 'react';


function RamAvailable() {

    const [cpuTemp,setCpuTemp] = React.useState();


    async function fetchTXT(api_url) {
        
        const res = await fetch(api_url);
        // if(!res.ok) {
        //     console.log("ERRORE GRAVISSIMISSSIMO")
        //     return(null)
        // }
        const data = await res.text()
        console.log(data);
        return(data);
    }


    async function fetchCpuTemp() {
        var data = await fetchTXT(process.env.PUBLIC_URL + "/temperature.txt");
        var temp = (parseInt(data)/1000);
        
        setCpuTemp(temp);
        
    }


    React.useEffect(() => {

        fetchCpuTemp();
        setInterval(()=>fetchCpuTemp(),2000);
        
        
    },[]);

    return(<div className="RamAvailable"><span>{cpuTemp}°</span></div>);

    
}

export default RamAvailable;