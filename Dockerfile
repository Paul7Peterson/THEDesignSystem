FROM node:20-alpine

RUN npm i -g http-server

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build:raw

EXPOSE 8080

CMD ["http-server", "dist"]