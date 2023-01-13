<template>
    <v-container>
        <v-row no-gutters justify="start" class="mt-16">
            <v-col cols="auto">
                <v-card height="130" width="130" class="rounded-lg" color="red">
                    <v-icon size="128" color="white">mdi-rocket-launch</v-icon>
                </v-card>

                <v-alert class="my-4">
                    <v-alert-title>
                        <span class="text-red text-h2 font-weight-medium">Laravel Jet Fuel</span>
                    </v-alert-title>
                </v-alert>

                <v-row no-gutters>
                    <v-card width="200" v-for="(tech,i) in techs" :key="i" class="pa-2 mr-2">
                        <v-img height="64" :src="tech.img"></v-img>
                        <v-card-title>
                            <v-row no-gutters justify="center">
                                {{ tech.version }}
                            </v-row>
                        </v-card-title>
                    </v-card>
                </v-row>
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
    data: () => ({
        techs: [
            { name: "Laravel", img: "/assets/laravel.svg", version:'Laravel 9' },
            { name: "Vue", img: "/assets/vue.svg", version: 'Vue 3' },
            { name: "Vuetify", img: "/assets/vuetify.svg", version: 'Vuetify 3' },
            { name: "Pinia", img: "/assets/pinia.svg", version: 'Pinia 3' },

        ],
    }),
}
</script>

<style scoped>

</style>
