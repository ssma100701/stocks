<p align="center"><img src="https://laravel.com/assets/img/components/logo-laravel.svg"></p>

## US stock market data display

This project can display QUALCOMM stock market price data and the maximum profit period

#### The website is built by Laravel 5.6 and react 16.2

### Installation
Please follow the guide.

1. `git clone`
2. `update the .env file along with database connection`
3. `composer install && composer update`
4. `php artisan key:generate`
5. `php artisan migrate`
6. `php artisan db:seed`
7. `npm install`

### Run PHP Dev Server
Either create a local dev url and map the link in webpack.mix.js file or open an other terminal window and copy paste the following command

```
php artisan serve
```

### Run Node Engine

Compile assets one time.
```
npm run dev
```
**OR**
or if you would like to compile assets on runtime then copy paste following command in terminal 

`npm run watch` or `npm run watch-poll`