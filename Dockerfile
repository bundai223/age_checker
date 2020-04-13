FROM node:12.1.0-alpine
ARG UID=1000
ARG GID=1000

WORKDIR /app
COPY . /app
RUN yarn install && \
    apk add --upgrade git openssh-client && \
    chown -R $UID:$GID /app

USER node
