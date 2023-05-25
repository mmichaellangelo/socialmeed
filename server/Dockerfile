FROM node:latest

RUN mkdir -p /opt/db/server

WORKDIR /opt/db/server

COPY package*.json ./

RUN npm install

EXPOSE 8000

CMD ["npm", "run", "dev"]