import Head from "next/head";
import { React, useState, useEffect, useRef } from "react";

const CpuTemp = (props) => {
  const [cpuTemp, setCpuTemp] = useState(0);

  function formattedData(data) {
    var temp = (parseInt(data.replace(/(\r\n|\n|\r)/gm, "")) / 1000).toFixed(2);
    return temp;
  }

  useEffect(() => {
    if (props.temperature != undefined) {
      setCpuTemp(formattedData(props.temperature));
    }
  }, [props.temperature]);

  return (
    <div className="CpuTemp widget extendedFont">
      <span className="widgetTitle">
        {/* <i className="fas fa-thermometer-quarter fontSmaller"  aria-hidden="true"/> */}
        <span>cpu</span>
      </span>
      <br />
      <span className="widgetData">{cpuTemp ? cpuTemp : "null"}°</span>
    </div>
  );
};

export default CpuTemp;
