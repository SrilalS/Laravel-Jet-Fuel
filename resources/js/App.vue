<template>
  <v-app>
      <v-app-bar app>
          <v-app-bar-title>Laravel Jet Fuel</v-app-bar-title>
          <v-btn border class="text-red" v-if="$route.path !== '/auth'" @click="authStore.deAuthenticate()" text>
              <v-icon color="red" class="mr-2">mdi-logout</v-icon>
              Sign Out
          </v-btn>
      </v-app-bar>

      <v-main>
          <router-view/>
      </v-main>

      <VToast ref="VToast"/>
  </v-app>
</template>

<script>
import {useAuthStore} from "@/Store/authStore";
import VToast from "./Components/VToast.vue";

export default {
    name: "App",
    components: {VToast},
    setup() {
        const authStore = useAuthStore();
        return {authStore}
    },
    data:()=>({
        drawer:true,
    }),
    mounted() {
        this.$root.VToast = this.$refs.VToast;
        this.authStore.authCheck();
    },

}
</script>

<style scoped>

</style>
