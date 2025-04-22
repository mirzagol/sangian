FROM node:20.16.0-alpine as build

# Hardcoded environment variables (if you need them at build time)
ENV NODE_ENV=production
ENV APP_ENV=production

RUN echo "Node Env: $NODE_ENV"
RUN echo "App Env: $APP_ENV"

WORKDIR /app

COPY .npmrc .npmrc
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
