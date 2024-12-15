FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN npm prune --production

FROM nginx:alpine AS run

WORKDIR /usr/share/nginx/html

COPY --from=build /app/build .
RUN  ls -l .