# Common build stage
FROM node:16.6.0-alpine3.11

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

#production stage
FROM nginx:alpine

WORKDIR /app

COPY --from=0 /app/build/ /app/build/
COPY --from=0 /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

<<<<<<< HEAD
CMD ["nginx", "-g", "daemon off;"]
=======
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> 8440c7efe275295ff3f5a3eb728663e06b51b75b
