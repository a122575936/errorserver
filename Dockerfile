FROM ubuntu:14.04
MAINTAINER weiwei li
RUN apt-get update
RUN apt-get -y -q install nodejs
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
