FROM node:10.7-alpine

RUN apk add python curl make build-base

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "server.js"]
