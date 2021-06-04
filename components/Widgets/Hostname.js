import { React, useEffect, useState } from "react";
import Head from "next/head";

const Hostname = (props) => {
  const [hostname, setHostname] = useState();

  useEffect(() => {
    setHostname(props.hostname);
  }, [props.hostname]);

  if (hostname) {
    return (
      <div className="Hostname">
        <Head>
          <title>{hostname}</title>
        </Head>
        {hostname}
      </div>
    );
  } else return null;
};

export default Hostname;
