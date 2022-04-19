FROM node:16.13.1 as node
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build --prod

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/dist/user-interface /usr/share/nginx/html
EXPOSE 80
