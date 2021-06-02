import React, { useState, useEffect, useRef } from "react";

export default function CpuTemp(props) {
  const [cpuTemp, setCpuTemp] = React.useState();

  async function formattedData(data) {
    var temp = parseInt(data) / 1000;
    setCpuTemp(temp);
  }


  React.useEffect(() => {

    if (props.temperature != undefined) setCpuTemp(formattedData(props.temperature));
    
  }, [props.temperature]);

  return (
    <div className="CpuTemp">
      <span>{cpuTemp ? cpuTemp : null}°</span>
    </div>
  );
};


