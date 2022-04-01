<template>
  <v-app>
      <v-app-bar app>
          <v-row justify="start" no-gutters>
              <h3 class="text-h5 font-weight-bold">
                  Laravel Jet Fuel
              </h3>
          </v-row>
          <v-btn v-if="$route.path !== '/auth'" @click="$store.commit('deAuth')" text>Sign Out</v-btn>

      </v-app-bar>

      <v-main>
          <router-view/>
      </v-main>

      <VToast ref="VToast"/>
  </v-app>
</template>

<script>
import VToast from "./Components/VToast";
export default {
    name: "App",
    components: {VToast},
    data:()=>({
        drawer:true,
    }),
    mounted() {
        this.$root.VToast = this.$refs.VToast
    },
}
</script>

<style scoped>

</style>
