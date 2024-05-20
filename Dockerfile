FROM node:16-alpine

WORKDIR /BACK-END

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]