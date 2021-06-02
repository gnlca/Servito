import { React, useState, useEffect, useRef } from "react";

const CpuTemp = (props) => {
  const [cpuTemp, setCpuTemp] = useState(0);

  function formattedData(data) {
    var temp = parseInt(data.replace(/(\r\n|\n|\r)/gm, "")) / 1000;
    return (temp);
  }


  useEffect(() => {

    if (props.temperature != undefined) {
      setCpuTemp(formattedData(props.temperature));
    }


  }, [props.temperature]);

  return (
    <div className="CpuTemp">
      <span>{cpuTemp ? cpuTemp : null}°</span>
    </div>
  );
};

export default CpuTemp;




