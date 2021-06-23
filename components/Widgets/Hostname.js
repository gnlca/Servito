import { React, useEffect, useState } from "react";
import Head from "next/head";

const Hostname = (props) => {
  const [hostname, setHostname] = useState();

  useEffect(() => {
    setHostname(props.hostname);
  }, [props.hostname]);

  if (hostname) {
    return (
      <div className="Hostname widget extendedFont">
        <Head>
          <title>{hostname}</title>
        </Head>
        <span className="widgetTitle">
          {/* <span className="fas fa-network-wired fontSmaller"></span> */}
          <span>hostname</span>
        </span>
        <br />
        <span className="widgetData">{hostname ? hostname : "null"}</span>
      </div>
    );
  } else return null;
};

export default Hostname;
