FROM node:20-alpine3.19

WORKDIR /app

COPY . .

RUN npm install

CMD [ "node", "./src/index.js" ]