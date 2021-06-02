import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import { React, useEffect, useState } from 'react';

import CpuTemp from './Widgets/CpuTemp';
import SysVersion from './Widgets/SysVersion';
import Hostname from  './Widgets/Hostname';
import MemFree  from './Widgets/MemFree';


const Widgets = () => {
  const [metrics, setMetrics] = useState({});


  

  async function fetchAPI(api_url) {
    const res = await fetch(api_url);
    const data = await res.json();
    //console.log(data);
    setMetrics(data);
    return data;
  }


  useEffect(() => {

    const Metrics_URL = `http://${window.location.host}/api/Metrics`;

    
    fetchAPI(Metrics_URL);
    setInterval(()=>fetchAPI(Metrics_URL),1000);

    
  
  }, []);

  return (
    <div className="Widgets">
      <div className="griglia">
        <div className="cpu  extendedFont">
          cpu
          <CpuTemp temperature={metrics.temperature}/>
        </div>

        <div className="cpu  extendedFont">
          freeRam
          <br />
          <span className="widgettino">
            <MemFree meminfo={metrics.meminfo}/>
          </span>
        </div>

        <div className="cpu  extendedFont">
          hostname
          <br />
          <span className="widgettino">
            <Hostname hostname={metrics.hostname}/>
          </span>
        </div>
      </div>
      <div className="cpu  extendedFont">
        version
        <SysVersion version={metrics.version}/>
        <span>
        </span>
      </div>
    </div>
  );
};

export default Widgets;
