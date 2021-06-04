import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { React, useEffect, useState } from "react";

import CpuTemp from "./Widgets/CpuTemp";
import SysVersion from "./Widgets/SysVersion";
import Hostname from "./Widgets/Hostname";
import MemFree from "./Widgets/MemFree";

const Widgets = () => {
  const [metrics, setMetrics] = useState({});

  const Metrics_URL = `/api/Metrics`;

  async function fetchAPI(api_url) {
    const res = await fetch(api_url);
    const data = await res.json();
    // console.log(data);
    setMetrics(data);
    return data;
  }

  useEffect(() => {
    fetchAPI(Metrics_URL);
    setInterval(() => fetchAPI(Metrics_URL), 1000);
  }, []);

  return (
    <div className="Widgets grid center rowGap1 ">
      <span className="groupTitle extendedFont">widgets</span>
      <div className="grid rowGap1">

      <div className="griglia  columGap1">
        <div className="widget  extendedFont">
          <span className="widgetTitle">cpu</span>
          <br />
          <span className="widgetData">
            <CpuTemp temperature={metrics.temperature} />
          </span>
        </div>

        <div className="widget  extendedFont">
          <span className="widgetTitle">freeRam</span>
          <br />
          <span className="widgetData">
            <MemFree meminfo={metrics.meminfo} />
          </span>
        </div>

        <div className="widget  extendedFont">
          <span className="widgetTitle">hostname</span>
          <br />
          <span className="widgetData">
            <Hostname hostname={metrics.hostname} />
          </span>
        </div>
      </div>

      <div className="widget  extendedFont">
        <span className="widgetTitle">version</span>
        <SysVersion version={metrics.version} />
        <span></span>
      </div>
      </div>
    </div>
  );
};

export default Widgets;
