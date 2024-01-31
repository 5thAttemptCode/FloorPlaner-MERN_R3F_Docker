FROM node:21
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 7777
CMD ["node", "server.js"]