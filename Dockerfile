FROM node:12.10.0-alpine

ENV APP_PATH /usr/app
WORKDIR $APP_PATH

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

CMD ["yarn", "start"]
