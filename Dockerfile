FROM node:alpine AS build

WORKDIR /app

RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

COPY . .

RUN npm -g install gatsby-cli && yarn install --network-timeout 300000 && yarn cache clean && gatsby build

FROM nginx:alpine
MAINTAINER it@democraciaenred.org

COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
