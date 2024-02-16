FROM node:alpine
WORKDIR /NodeJs-HelloWorld
COPY *.json *.js /NodeJs-HelloWorld/
RUN npm install express@4
EXPOSE 8080
CMD node app.js
