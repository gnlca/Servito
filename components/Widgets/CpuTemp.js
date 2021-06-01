import React, { useState, useEffect, useRef } from "react";

const CpuTemp = (props) => {
  const [cpuTemp, setCpuTemp] = React.useState("");

  async function fetchCpuTemp(data) {
    var temp = parseInt(data) / 1000;
    setCpuTemp(temp);
  }

  React.useEffect(() => {
    
    // console.log("QUESTO è CICCIO : " + Temperature());
    // Temperature();
    // setInterval(()=>Temperature(),2000);
    console.log(props)
    setCpuTemp(props.temperature)
  }, [props]);

  return (
    <div className="CpuTemp">
      <span>{cpuTemp}°</span>
    </div>
  );
};

export default CpuTemp;
