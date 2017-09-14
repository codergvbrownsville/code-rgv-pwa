FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --unsafe-perm \
    npm rebuild node-sass --force

COPY . /usr/src/app

EXPOSE 8080

CMD ["npm", "run", "serve-prod"]