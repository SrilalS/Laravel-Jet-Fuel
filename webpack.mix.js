const mix = require('laravel-mix');
require('vuetifyjs-mix-extension')
require('laravel-mix-bundle-analyzer');
require('vuetify-loader');


if (mix.inProduction()) {
    mix.bundleAnalyzer();
}

mix.options({
    hmrOptions: {
        host: 'public.local',
        port: 8080,
    },
});

mix.js('resources/js/app.js', 'public/js')
    .vuetify('vuetify-loader')
    .vue()
    .sass('resources/sass/app.sass', 'public/css');
