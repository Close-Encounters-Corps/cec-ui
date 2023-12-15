FROM docker.io/library/node:21-alpine AS build
WORKDIR /build

COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

FROM docker.io/library/node:21-alpine
WORKDIR /app
COPY --from=build /build/package.json /build/server.js .
COPY --from=build /build/build build
COPY --from=build /build/node_modules node_modules
ENTRYPOINT ["/usr/local/bin/node", "server.js"]
