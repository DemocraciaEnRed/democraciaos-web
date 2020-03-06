FROM node:alpine AS build
RUN \
  apk add --no-cache python make g++ && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*
RUN npm install -g gatsby-cli yarn
WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["gatsby", "build" ]

FROM nginx:alpine
MAINTAINER it@democraciaenred.org
COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
