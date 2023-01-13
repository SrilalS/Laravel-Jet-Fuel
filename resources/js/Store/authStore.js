import {defineStore} from 'pinia'
import {authClient} from "@/Plugins/client";
import Router from "@/Router";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        Token: null,
        User: null,
        AuthChecked: true,
    }),
    actions: {
        authenticate(data) {
            this.Token = data.token;
            this.User = data.user;
            window.localStorage.setItem('token', data.token);
            window.localStorage.setItem('user', JSON.stringify(data.user));
            authClient.defaults.headers.authorization = 'Bearer ' + data.token;
            Router.push('/').then(r => {
                this.AuthChecked = true;
            });
        },
        deAuthenticate() {
            this.Token = null;
            this.User = null;
            window.localStorage.clear();
            authClient.defaults.headers.authorization = null;
            Router.push('/auth').then(r => {
                this.AuthChecked = true;
            });
        },
        async authCheck() {
            this.AuthChecked = false;
            let token = localStorage.getItem('token');
            authClient.defaults.headers.authorization = 'Bearer '+ token;
            await authClient.post('/api/auth/check').then(response => {
                if (response.data.status === 'success') {
                    this.Token = token;
                    this.User = response.data.user;
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('user', JSON.stringify(response.data.user));
                    authClient.defaults.headers.authorization = 'Bearer '+ token;
                    this.AuthChecked = true;
                } else {
                    window.localStorage.clear();
                    this.User = null;
                    this.Token = null;
                    authClient.defaults.headers.authorization = null;
                    Router.push('/auth').then(r => {
                        this.AuthChecked = true;
                    });
                }
            }).catch(error => {
                window.localStorage.clear();
                this.Token = null;
                this.User = null;
                authClient.defaults.headers.authorization = null;
                Router.push('/auth').then(r => {
                    this.AuthChecked = true;
                });

            });
        },
    }
})
