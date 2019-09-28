FROM mhart/alpine-node:10 

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

