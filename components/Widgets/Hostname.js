import { React, useEffect, useState } from "react";
import Head from "next/head";

const Hostname = (props) => {
  const [hostname, setHostname] = useState();

  useEffect(() => {
    setHostname(props.hostname);
  }, [props.hostname]);

  if (hostname) {
    return (
      <>
        <Head>
          <title>{hostname}</title>
        </Head>
        <div className="Hostname widget extendedFont">
          <span className="widgetTitle inlineGrid center col2auto colGap03">
            {/* <span className="fas fa-network-wired fontSmaller"></span> */}
            <span>hostname</span>
          </span>
          <br />
          <span className="widgetData">{hostname}</span>
        </div>
      </>
    );
  } else return null;
};

export default Hostname;
