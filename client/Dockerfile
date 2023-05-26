FROM node:20-alpine3.16

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install --no-optional && npm cache clean --force

EXPOSE 5173

CMD ["npm", "run", "dev"]