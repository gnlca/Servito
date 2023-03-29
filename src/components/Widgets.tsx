import CpuTemp from './Widgets/CpuTemp'
import SysVersion from './Widgets/SysVersion'
import Hostname from './Widgets/Hostname'
import MemFree from './Widgets/MemFree'
import { useEffect, useState } from 'react'
import { trpc } from '../utils/trpc'

const Metrics_URL = `/api/metrics`

const Widgets = () => {
  const { data: metrics } = trpc.metrics.getAllMetrics.useQuery(undefined, {
    refetchInterval: 20000,
  })

  return (
    <div className="Widgets grid center rowGap1 maxWidthMinContent ">
      <span className="categoryTitle extendedFont">widgets</span>
      <div className="grid rowGap07">
        <div className="grid center col3 colGap07  ">
          <CpuTemp temperature={metrics?.temperature} />
          <MemFree meminfo={metrics?.memory} />
          <Hostname hostname={metrics?.hostname} />
        </div>

        <SysVersion version={metrics?.version} />
      </div>
    </div>
  )
}

export default Widgets
