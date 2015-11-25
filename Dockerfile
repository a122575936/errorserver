#FROM ubuntu:14.04
FROM daocloud/ci-node:0.12
MAINTAINER weiwei li
RUN node --version
RUN npm --version
EXPOSE 80
