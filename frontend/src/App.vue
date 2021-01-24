<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >

      <Navbar />

    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      height="75px"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-truncate">Tracing University of London violations of its own policies, agreements, etc.</v-toolbar-title>

      <v-spacer />

      <SocialShareButton />

    </v-app-bar>

    <v-main>
      <router-view></router-view>

    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import SocialShareButton from '@/components/SocialShareButton'

export default {
  components: { Navbar, SocialShareButton },
  name: 'App',

  data: () => ({ drawer: null })
}
</script>
