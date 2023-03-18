FROM node:18.11.9
WORKDIR /app
ADD . /appRUN npm install
EXPOSE 3000
CMD npm start