#Servito Dockerfile

FROM node:alpine as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /Servito
COPY package.json  ./
RUN npm install --frozen-lockfile

FROM node:alpine as builder
WORKDIR /Servito
COPY . .
COPY --from=dependencies /Servito/node_modules ./node_modules
RUN npm run build

FROM node:alpine as production
WORKDIR /Servito
ENV NODE_ENV production

COPY --from=builder /Servito/next.config.js ./
COPY --from=builder /Servito/public ./public
COPY --from=builder /Servito/.next ./.next
COPY --from=builder /Servito/node_modules ./node_modules
COPY --from=builder /Servito/package.json ./package.json

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 19

CMD ["yarn", "start"]