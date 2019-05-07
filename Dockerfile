FROM node:12.1.0-alpine
ARG UID=1000
ARG GID=1000

WORKDIR /app
COPY . /app
RUN yarn install && \
    apk add --upgrade git && \
    chown -R $UID:$GID /app
RUN apk add --upgrade openssh-client

USER node
