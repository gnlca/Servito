import { z } from 'zod'
import { router, publicProcedure } from '../trpc'

export const metricsRouter = router({
  getWeather: publicProcedure
    .input(z.object({ lat: z.string().nullish(), long: z.string().nullish() }).nullish())
    .query(() => {
      return null
    }),
})
