FROM node:12.10.0-alpine AS builder

WORKDIR /usr/src

COPY package.json .
RUN yarn install

COPY . .

RUN yarn build

FROM node:12.10.0-alpine
WORKDIR /usr/app

COPY --from=builder /usr/src/dist .

CMD ["node", "index.js"]
