import { router } from '../trpc'
import { authRouter } from './auth'
import { exampleRouter } from './example'
import { metricsRouter } from './metrics'

export const appRouter = router({
  metrics: metricsRouter,
  example: exampleRouter,
  auth: authRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
