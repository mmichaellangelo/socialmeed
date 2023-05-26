FROM node:20-alpine3.16

RUN mkdir -p /opt/db/server

WORKDIR /opt/db/server

COPY package*.json .

RUN npm install --no-optional && npm cache clean --force

EXPOSE 8000

CMD ["npm", "run", "dev"]