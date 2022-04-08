FROM node:16

WORKDIR /app

COPY package.json package-lock.json .

RUN npm ci --ignore-scripts --omit=dev

USER node

COPY knexfile.js server.js .

COPY src src

ENTRYPOINT ["npm", "start"]
