FROM node:16-alpine

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn install && yarn global add typescript

COPY . /usr/src/

CMD ["yarn", "start"]
