FROM nginx:1.13

MAINTAINER Alexander van Zyl <vanzyl.alex@gmail.com>

RUN mkdir -p /var/www/html

# Hack to change uid of 'www-data' to 1000
# This is to handle file permissions between host and container
# User ID can be found by running id -u
RUN usermod -u 1000 www-data

COPY default.conf /etc/nginx/conf.d/default.conf

WORKDIR /var/www/html

EXPOSE 80 443

# "nginx -g daemon off" to run nginx in the foreground.
CMD ["nginx", "-g", "daemon off;"]