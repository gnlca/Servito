FROM node:lts as dependencies
WORKDIR /Servito
COPY package.json  ./
RUN npm install --frozen-lockfile

FROM node:lts as builder
WORKDIR /Servito
COPY . .
COPY --from=dependencies /Servito/node_modules ./node_modules
RUN npm build

FROM node:lts as runner
WORKDIR /Servito
ENV NODE_ENV production

COPY --from=builder /Servito/next.config.js ./
COPY --from=builder /Servito/public ./public
COPY --from=builder /Servito/.next ./.next
COPY --from=builder /Servito/node_modules ./node_modules
COPY --from=builder /Servito/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]