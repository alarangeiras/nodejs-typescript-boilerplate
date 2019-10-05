FROM node:12.10.0-alpine

WORKDIR /src

COPY . .

RUN npm install --production

COPY ./docker/dev/.env .env

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/npm", "run", "test"]