FROM node:20.10

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]