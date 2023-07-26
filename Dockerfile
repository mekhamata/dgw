FROM node:18.11.0-slim

WORKDIR /frontend

COPY package*.json ./

ARG npm_install_command=ci
RUN npm $npm_install_command
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build
RUN npm install



EXPOSE 3000

CMD npm run start