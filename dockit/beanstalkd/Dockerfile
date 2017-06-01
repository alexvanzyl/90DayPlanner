FROM debian:jessie

MAINTAINER Aleander van Zyl <vanzyl.alex@gmail.com>

RUN apt-get update \
    && apt-get install -y beanstalkd \
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

EXPOSE 11300

CMD ["beanstalkd", "-p", "11300"]