import { React, useEffect, useState } from "react";
import Head from "next/head";

const Hostname = (props) => {
  const [hostname, setHostname] = useState();

  useEffect(() => {
    setHostname(props.hostname);
  }, [props.hostname]);

  return (
    <div className="Hostname widget extendedFont">
      {hostname ? <Head><title>{hostname}</title></Head> : null}
      
      <span className="widgetTitle">
        {/* <span className="fas fa-network-wired fontSmaller"></span> */}
        <span>hostname</span>
      </span>
      <br />
      <span className="widgetData">{hostname ? hostname : "null"}</span>
    </div>
  );
};

export default Hostname;
