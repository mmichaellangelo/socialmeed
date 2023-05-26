FROM node:20-alpine3.16

RUN mkdir -p /auth

WORKDIR /auth

COPY package*.json .

RUN npm install

EXPOSE ${AUTH_PORT}

CMD ["npm", "run", "dev"]