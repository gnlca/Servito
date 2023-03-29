import { z } from 'zod'
import { readFile } from '../../lib/utils'

import { router, publicProcedure } from '../trpc'

const paths = {
  temperature: '/sys/class/thermal/thermal_zone0/temp',
  memory: '/proc/meminfo',
  hostname: '/etc/hostname',
  version: '/proc/version',
}

type Metrics = {
  [Key in keyof typeof paths]?: string
}

export const metricsRouter = router({
  getAllMetrics: publicProcedure.query(() => {
    let data: Metrics = {}
    //for loop for each path in paths

    for (const [key, path] of Object.entries(paths)) {
      data = { ...data, [key]: readFile(path) }
    }

    return data
  }),
  getMemInfo: publicProcedure.query(() => {
    const data = readFile(paths.memory)
    return data
  }),
  getTemperature: publicProcedure.query(() => {
    const data = readFile(paths.temperature)
    return data
  }),
  getHostname: publicProcedure.query(() => {
    const data = readFile(paths.hostname)
    return data
  }),
  getVersion: publicProcedure.query(() => {
    const data = readFile(paths.version)
    return data
  }),
})
