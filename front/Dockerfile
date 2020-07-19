FROM node:lts-alpine as builder

WORKDIR /builder

COPY . .

RUN yarn install \
    && yarn build

FROM nginx:latest

COPY --from=builder /builder/dist /usr/share/nginx/html
