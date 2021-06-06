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
    <div className="CpuTemp">
      <div className="widget  extendedFont">
        <span className="widgetTitle">cpu</span>
        <br />
        <span className="widgetData">
          {cpuTemp ? cpuTemp : "null"}°
        </span>
      </div>
    </div>
  );
};

export default CpuTemp;
