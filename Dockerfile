FROM node:latest

ENV APP_ROOT /web

WORKDIR /web
ADD . /web

RUN npm ci

EXPOSE 3000

RUN npm run build
CMD node .output/server/index.mjs
