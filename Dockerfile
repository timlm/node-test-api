FROM node:10-alpine

RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]