FROM node:18.11.0-slim

WORKDIR /frontend

COPY package*.json ./

RUN npm build
RUN npm install

COPY . .

EXPOSE 3000

CMD npm run start