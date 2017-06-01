FROM node:7

MAINTAINER Alexander van Zyl <vanzyl.alex@gmail.com>

RUN apt-get install -y git \
    && apt-get autoclean \
    && apt-get clean

WORKDIR /var/www/html

CMD ["node"]