FROM node:16-alpine3.11
WORKDIR /var/www
COPY . .
EXPOSE 3000
ENTRYPOINT [ "node", "server.js" ]