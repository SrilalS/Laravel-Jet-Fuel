import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    server: {
        hmr: {
            host: 'public.local',
            port: 8080,
        },
    },
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        vuetify({
            autoImport: true
        }),
        laravel({
            input: [
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./resources/js', import.meta.url))
        },
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    }
});
