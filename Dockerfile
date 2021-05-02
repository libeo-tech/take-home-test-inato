FROM node:12.10.0-alpine

WORKDIR /usr/app

COPY package.json /usr/app/package.json
RUN yarn install

COPY . /usr/app/

CMD ["yarn", "start"]