FROM node:10-alpine

WORKDIR /usr/app

COPY package.json .

COPY . .

RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]