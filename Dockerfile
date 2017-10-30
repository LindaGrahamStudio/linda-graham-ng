FROM nginx:alpine
MAINTAINER datumgeek
COPY ./ /usr/share/nginx/html
EXPOSE 80
