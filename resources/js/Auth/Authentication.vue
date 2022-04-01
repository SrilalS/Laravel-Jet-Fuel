<template>
  <v-container>
    <v-row no-gutters justify="center">
        <v-col cols="3">
            <v-card class="rounded-lg mt-16">
                <v-card-text>
                    <v-row no-gutters>
                        <v-col>
                            <v-card-title class="ml-0 pl-0">
                                <span v-if="is_login" class="headline">Sign In</span>
                                <span v-if="!is_login" class="headline">Sign Up</span>
                            </v-card-title>
                            <v-form v-if="is_login" ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    outlined
                                    v-model="form.email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-btn
                                    :loading="loading"
                                    color="primary"
                                    dark
                                    @click="Login">
                                    Sign In
                                </v-btn>
                                <v-btn
                                    text
                                    @click="is_login = false">
                                    Sign Up
                                </v-btn>
                            </v-form>

                            <v-form v-if="!is_login" ref="form" v-model="valid" lazy-validation>
                                <v-text-field
                                    outlined
                                    v-model="form.name"
                                    :rules="nameRules"
                                    label="Name"
                                    type="text"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    autofocus
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password"
                                    :rules="passwordRules"
                                    label="Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-text-field
                                    outlined
                                    v-model="form.password_confirmation"
                                    :rules="passwordRules"
                                    label="Confirm Password"
                                    type="password"
                                    required
                                ></v-text-field>
                                <v-btn
                                    :loading="loading"
                                    color="primary"
                                    dark
                                    @click="Register">
                                    Sign Up
                                </v-btn>
                                <v-btn
                                    text
                                    @click="is_login = true">
                                    Sign In
                                </v-btn>
                            </v-form>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {client} from "../Plugins/client";

export default {
    name: "Authentication",
    data:()=>({
        loading: false,
        is_login:true,
        form: {
            name: null,
            email: null,
            password: '',
            password_confirmation: '',
        },
        valid: false,
        nameRules: [
            v => !!v || 'Name is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 6 || 'Password must be at least 6 characters'
        ]
    }),
    methods:{
        Login(){
            this.$refs.form.validate()
            if(this.valid){
                this.loading = true;
                client.post('/api/auth/login', this.form).then(response => {
                    console.log(response.data);
                    this.$store.commit('auth', {
                        token: response.data.token,
                        user: response.data.user
                    });
                }).catch(error => {
                    console.log(error.response);
                    this.$root.VToast.show({
                        message: 'Please Try Again!',
                        icon: 'alert-circle',
                        color:'error'
                    })
                    this.loading = false;
                }).finally(() => {
                    this.loading = false;
                });
            }
        },
        Register(){
            this.$refs.form.validate()
            if(this.valid){
                this.loading = true;
                client.post('/api/auth/register', this.form).then(response => {
                    console.log(response.data);
                    this.is_login = true;
                }).catch(error => {
                    console.log(error.response);
                    this.loading = false;
                }).finally(() => {
                    this.loading = false;
                });
            }
        }

    },
    mounted() {

    }
}
</script>

<style scoped>

</style>
