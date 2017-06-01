![forthebadge](http://forthebadge.com/images/badges/built-by-developers.svg)
# Just DockIt for Laravel
A simple docker development environment built for Laravel.


Set up for CI and Production environments coming soon :)

## Requirements
- [Docker](https://docs.docker.com/engine/installation/) & [Docker compose](https://docs.docker.com/compose/install/)

## What's in the box?
- PHP 7.1 and Composer
- PHPRedis (only if set to install see .env file)
- Xdebug (only if set to install see .env file)
- NGINX
- MariaDB
- Node
- Redis 
- Beanstalkd & Beanstalkd console.
- PhpMyAdmin

## New project set up
1) Create an empty project folder.
```bash
mkdir MyAwesomeProject && cd MyAwesomeProject
```

2) If you starting fresh clone Just Dockit and install Laravel.
```bash
git clone https://github.com/justdockit/justdockit-laravel.git dockit && cd dockit
./dockit install-laravel MyApp 
# same as running composer create-project --prefer-dist laravel/laravel MyApp
```
2.1) If you have an existing project then add Just Dockit to your project folder:
```bash
git submodule add https://github.com/justdockit/justdockit-laravel.git dockit
```

If you have composer installed on your machine and you would like to keep the cache in 
sync with the container add the following volume to the docker-compose.yml file:

dockit/docker-compose.yml
```yaml
php:
    ...
    volumes:
      - ~/.composer/cache:/.composer/cache 
    ...
```

3) Set you application path and change any ports in the .env file:

dockit/.env 
```
### APPLICATION ###
APP_PATH=../

### NGINX ###
NGINX_HOST_HTTP_PORT=80
NGINX_HOST_HTTPS_PORT=443
...
```

4) Build images and start the containers.
```bash
./dockit up -d --build # this is the same as running docker-compose up -d --build
```

5) Update laravels .env file. and set the Schema default string length since we 
using MariaDB 10.1.  

MyApp/.env
```
...
DB_HOST=mariadb
...

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_DRIVER=beanstalkd

REDIS_HOST=redis
...
```
and

MyApp/app/Providers/AppServiceProvider.php
```php
use Illuminate\Support\Facades\Schema;

/**
 * Bootstrap any application services.
 *
 * @return void
 */
public function boot()
{
    Schema::defaultStringLength(191);
}
  
```

6) Inside config/database change the redis client to phpredis.
```php
 'redis' => [

        'client' => 'phpredis',
        ...
```

If all went well you should see the laravel welcome page at localhost or localhost:8000 if you changed the APP_PORT to 8000.


## Workflow

```bash
#Starting and stopping containers.
./dockit stop # or docker-compose stop
./dockit start # or docker-compose start

# Running composer in a container.
./dockit composer

# Running artisan
./dockit art     # if the php container is running, this is a lot quicker.
./docker artisan # starts up a new php container runs artisan command and then removes it.

# Running tests
./docket t    # if the php container is running, this is a lot quicker.
./dockit test # starts up a new php container to runs tests and then removes it.

```

## Caveat
Once you have everything running, if you happen change the location of your laravel folder. You need to updated the applications volume in the docker-compose.yml file and remove the applications container before running any of the above commands. Then rebuild all the images.

```bash
./dockit rm -f applications # or docker-compose rm -f applications
./docker up -d --build # rebuild
```

Happy Coding!
