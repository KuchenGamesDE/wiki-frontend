FROM node:20.5-bullseye-slim

LABEL owner="KuchenGames"
LABEL hoster="r3dspace@spicydragon.net"

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

# Development build
RUN npm install
# Production build
# RUN npm ci --only=production

COPY --chown=node:node . .

RUN npm run build

RUN rm -rf \
        REDME.md \
        index.html \
        node_modules \
        package-lock.json \
        package.json \
        postcss.config.js \
        public \
        src \
        tailwing.config.js \
        vite.config.js

RUN echo '{"name":"wiki-frontend","private":true,"version":"0.0.0","type":"module"}' > package.json

RUN npm install express

USER node

EXPOSE 8080

CMD [ "dumb-init", "node", "server.js" ]