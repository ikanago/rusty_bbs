FROM node:lts-alpine as builder

WORKDIR /builder

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

FROM nginx:latest

COPY --from=builder /builder/dist /usr/share/nginx/html
