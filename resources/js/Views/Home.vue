<template>
    <v-container>
        <v-row no-gutters justify="start" class="mt-16">
            <v-col cols="auto">
                <v-card height="130" width="130" class="rounded-lg" color="red">
                    <v-icon size="128" color="white">mdi-rocket-launch</v-icon>
                </v-card>

                <v-alert class="mt-4">
                    <v-alert-title>
                        <span class="text-red text-h2 font-weight-medium">Laravel Jet Fuel</span>
                    </v-alert-title>
                </v-alert>

                <v-row no-gutters>
                    <v-card>
                        <v-img src="/Assets/laravel.svg')"></v-img>
                    </v-card>
                </v-row>
                <br>

                <br>
                <span>Laravel 9 | Vue 3 | Vuetify 3</span>
                <br>
                <span>Template Maintainer: Srilal Sachintha</span>
                <br>
                <v-btn color="primary" append-icon="mdi-github" class="mt-2" target="_blank" href="https://github.com/SrilalS/Laravel-Jet-Fuel">
                    Github
                </v-btn>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "Home",
    methods:{
    }
}
</script>

<style scoped>

</style>
