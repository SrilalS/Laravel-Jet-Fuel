import Vue from 'vue';
import Vuex from 'vuex';
import {authClient} from "./client";
import router from "./router";

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        Token: null,
        User: null,
        AuthChecked:true,
    },
    mutations: {
        auth(state, data) {
            state.Token = data.token;
            state.User = data.user;
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(data.user));
            authClient.defaults.headers.authorization = 'Bearer '+ data.token;
            router.push('/').then(r => {
                state.AuthChecked = true;
            });
        },
        deAuth(state) {
            state.Token = null;
            state.User = null;
            window.localStorage.clear();
            authClient.defaults.headers.authorization = null;
            router.push('/auth').then(r => {
                state.AuthChecked = true;
            });
        },
        authCheck(state) {
            state.AuthChecked = false;
            let token = localStorage.getItem('token');
            authClient.defaults.headers.authorization = 'Bearer '+ token;
            authClient.post('/api/auth/check').then(response => {
                if (response.data.status === 'success') {
                    state.Token = token;
                    state.User = response.data.user;
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('user', JSON.stringify(response.data.user));
                    authClient.defaults.headers.authorization = 'Bearer '+ token;
                    state.AuthChecked = true;
                } else {
                    window.localStorage.clear();
                    state.User = null;
                    state.Token = null;
                    authClient.defaults.headers.authorization = null;
                    router.push('/auth').then(r => {
                        state.AuthChecked = true;
                    });
                }
            }).catch(error => {
                window.localStorage.clear();
                state.Token = null;
                state.User = null;
                authClient.defaults.headers.authorization = null;
                router.push('/auth').then(r => {
                    state.AuthChecked = true;
                });

            });
        },
    }
});

export default Store;
