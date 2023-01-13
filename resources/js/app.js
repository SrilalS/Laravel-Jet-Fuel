import {createApp} from 'vue';

import Pinia from '@/Store';
import Router from "@/Router";
import Vuetify from "@/Plugins/vuetify";
import {loadFonts} from "@/Plugins/webfontloader";

import App from '@/App.vue';


const app = createApp(App);
app.use(Router)
app.use(Pinia)
app.use(Vuetify)
app.mount('#app');

await loadFonts();
