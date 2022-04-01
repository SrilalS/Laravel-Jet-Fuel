require('./bootstrap');
import Vue from 'vue';
import Vuetify from "./Plugins/vuetify";
import Router from "./Plugins/router";
import Store from './Plugins/store';

import App from "./App.vue";

const app = new Vue({
    vuetify : Vuetify,
    router: Router,
    store: Store,
    render: h => h(App),
    el: '#app',
    beforeMount() {
        if(this.$route.path !== 'auth'){
            this.$store.commit('authCheck');
        }
    }
});
