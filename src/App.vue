<template>
  <div id="app">
    <v-app v-if="$auth.ready()">
      <app-header />
      <app-sidebar />

      <v-container fluid>

        <v-layout column>

          <router-view />
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  name: 'App',

  components: {
    AppHeader: TheHeader,
    AppSidebar: TheSidebar,
  },

  data() {
    return {
      sidebar: false,
    }
  },
}
</script>
