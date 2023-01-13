# Laravel Jet Fuel
### Template version 3.0.0

![Laravel](https://img.shields.io/badge/Laravel-9-red)
![Vue](https://img.shields.io/badge/Vue-3-green)
![Vuetify](https://img.shields.io/badge/Vuetify-3-blue)
![Pinia](https://img.shields.io/badge/Pinia-3-yellow)
![VueRouter](https://img.shields.io/badge/VueRouter-4-green)

## About Jet Fuel

Laravel Jet Fuel is a template made for quick and easy setup for 
hobby projects and assignments and similar scale projects. 
It keeps to the bare bones for functions and best suited for skipping 
the setup part of Laravel and Vue Integrated projects.

For years, I have been using Laravel and Vue for my university projects and decided to make a template to make the setup process shorter.
I have now opened it to everyone to use, and hopefully it will be useful for you as well.

I Have Kept everything to the bare bones, so it is easy to understand and modify. 
This also means that it is not a full-fledged project, 
but rather a starting point for your project.

## Features

-   ✅ Latest Framework Versions
-   ✅ Support for Vue 3
-   ✅ Vuetify 3 For Faster UI Development
-   ✅ JWT Authentication Pre-Setup
-   ✅ Pinia For State Management
-   ✅ For Routing, VueRouter Pre-Setup
-   ✅ Both Vite and Mix Build Options

## Vite vs Mix
Vite offers a faster development experience than Mix and is now the default
build tool for almost every framework that used to use Mix. it also offers 
 lightweight js chunk sizes and faster build times than Mix.

- The `Main` branch and the `laravel9-vue3-with-vite` is for Vue3 and Vite.
- The `laravel9-vue2-with-mix` branch is for Vue2 and Mix.

`Note that the Vue 2 version of the template is now in maintenance mode and will not be updated.`


## Installation

1. Clone the repository
2. Run `composer install`
3. Run `npm install`
4. Configure your `.env` file
5. Run `php artisan migrate`
6. Configure your `vite.config.js` file
7. Run `npm run dev` or `npm run build`

In `vite.config.js` file, the `host` option is set to `http://public.local` by default.
this is the host for Laragon. If you are using the in-built PHP server, change it to the
corresponding host of yours.

## Laragon vs In-Built PHP Server


I Recommend using Laragon for development as it is a lot faster than the
inbuilt PHP server. Laragon also comes with a lot of other tools.
check out [Laragon](https://laragon.org/) for more info.
