FROM node:latest as build

WORKDIR /src

COPY . .

RUN npm install -g @angular/cli

RUN npm install

RUN ng build --prod 

FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /src/dist/weatherex-frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]