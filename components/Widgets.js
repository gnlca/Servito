import { React, useEffect, useState } from "react";

import CpuTemp from "./Widgets/CpuTemp";

function WidgetsData() {
  const Metrics_URL = "http://localhost:3000/api/Metrics";

  async function fetchAPI(api_url) {
    const res = await fetch(api_url);
    const data = await res.json();
    console.log(data);
    return data;
  }

  async function formatData() {}

  return fetchAPI(Metrics_URL);
}

const Widgets = () => {
  const [dati, setDati] = useState({});

  useEffect(() => {
    setDati(WidgetsData());
  }, []);

  return (
    <div className="Widgets">
      <div className="griglia">
        <div className="cpu  extendedFont">
          cpu
          <CpuTemp temperature={dati.temperature} />
        </div>
        <div className="cpu  extendedFont">
          freeRam
          <br />
          <span className="widgettino">1338MB</span>
        </div>
        <div className="cpu  extendedFont">
          hostname
          <br />
          <span className="widgettino">agpi</span>
        </div>
      </div>
      <div className="cpu  extendedFont">
        version
        <br />
        <span>
          Linux version 5.10.17-v7l+ (dom@buildbot) (arm-linux-gnueabihf-gcc-8
          (Ubuntu/Linaro 8.4.0-3ubuntu1) 8.4.0, GNU ld (GNU Binutils for Ubuntu)
          2.34) #1414 SMP Fri Apr 30 13:20:47 BST 2021
        </span>
      </div>
    </div>
  );
};

export default Widgets;
