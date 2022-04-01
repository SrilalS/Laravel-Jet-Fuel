import Vue from 'vue';
import Vuex from 'vuex';
import {authClient} from "./client";
import router from "./router";

Vue.use(Vuex);

const Store = new Vuex.Store({
    state: {
        Token: null,
        User: null,
        Loading:false,
    },
    mutations: {
        auth(state, data) {
            state.Token = data.token;
            state.User = data.user;
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(data.user));
            authClient.defaults.headers.authorization = 'Bearer '+ data.token;
            router.push('/').then(r => {
                window.location.reload();
            });
        },
        deAuth(state) {
            state.Token = null;
            state.User = null;
            window.localStorage.clear();
            authClient.defaults.headers.authorization = null;
            router.push('/auth').then(r => {
                window.location.reload();
            });
        },
        authCheck(state) {
            let token = localStorage.getItem('token');
            authClient.defaults.headers.authorization = 'Bearer '+ token;
            authClient.post('/api/auth/check').then(response => {
                if (response.data.status === 'success') {
                    state.Token = token;
                    state.User = response.data.user;
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('user', JSON.stringify(response.data.user));
                    authClient.defaults.headers.authorization = 'Bearer '+ token;
                    //router.push('/').then(r => {
                        //window.location.reload();
                    //});
                } else {
                    window.localStorage.clear();
                    state.Token = null;
                    state.User = null;
                    authClient.defaults.headers.authorization = null;
                    router.push('/auth').then(r => {
                        //window.location.reload();
                    });
                }
            }).catch(error => {
                window.localStorage.clear();
                state.Token = null;
                state.User = null;
                authClient.defaults.headers.authorization = null;
                router.push('/auth').then(r => {
                    //window.location.reload();
                });

            });
        },
    }
});

export default Store;
