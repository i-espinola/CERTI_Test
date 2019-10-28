FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
