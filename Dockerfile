#FROM ubuntu:14.04
FROM daocloud/ci-node:0.12
MAINTAINER weiwei li
RUN node --version
RUN npm --version
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 80

CMD ["node", "app.js"]
