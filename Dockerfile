FROM node:10.7-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .