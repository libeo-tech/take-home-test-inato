FROM node:12.10.0-alpine

WORKDIR /usr/app

COPY package.json /usr/app/package.json

RUN yarn install

COPY tsconfig.json /usr/app/tsconfig.json
COPY tsconfig.build.json /usr/app/tsconfig.build.json
COPY src /usr/app/src

RUN yarn build

CMD ["yarn", "start"]
