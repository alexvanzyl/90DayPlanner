FROM php:7.1-fpm

MAINTAINER Alexander van Zyl <vanzyl.alex@gmail.com>

# Install required PHP extensions and their dependencies.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libpq-dev \
        libmemcached-dev \
        libjpeg62-turbo-dev \
        libpng12-dev \
        libfreetype6-dev \
        libssl-dev \
        libmcrypt-dev \
        curl \
        git \
    && docker-php-ext-install \
        mcrypt \
        bcmath \
        pdo_mysql \
        pdo_pgsql \
        gd \
        zip \
    && docker-php-ext-configure gd \
        --enable-gd-native-ttf \
        --with-jpeg-dir=/usr/lib \
        --with-freetype-dir=/usr/include/freetype2 \
    # Install composer and set required folder permissions
    && php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/local/bin/ --filename=composer \
    && mkdir -p /run/php \
    && mkdir /.composer \
    && chown -R 1000 /.composer \
    # Clean up
    && apt-get autoclean \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set the composer home folder environment.
ENV COMPOSER_HOME=/.composer

# Only install xdbug if it has been required.
ARG INSTALL_XDEBUG=false
RUN if [ ${INSTALL_XDEBUG} = true ]; then \
        # Install the xdebug extension
        pecl install xdebug \
        && docker-php-ext-enable xdebug \
    ;fi

# Copy xdebug configration for remote debugging
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

# Only install PhpRedis if it has been required.
ARG INSTALL_PHPREDIS=false
RUN if [ ${INSTALL_PHPREDIS} = true ]; then \
        # Install Php Redis Extension
        pecl install redis \
        &&  rm -rf /tmp/pear \
        &&  docker-php-ext-enable redis \
    ;fi

# Hack to change uid of 'www-data' to 1000
# This is to handle file permissions between host and container
# User ID can be found by running id -u
RUN usermod -u 1000 www-data

# Copy our laravel php configuration
COPY laravel.ini /usr/local/etc/php/conf.d

EXPOSE 9000
CMD ["php-fpm"]