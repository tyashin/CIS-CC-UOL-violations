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
      elevation="2"
      height="73px"

    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-truncate text-Subtitle-1">
        Tracing University of London violations of its own policies, agreements, etc.
        </v-toolbar-title>

      <v-spacer />

      <SocialShareButton />

    </v-app-bar>

    <v-main>
      <router-view></router-view>

    </v-main>

  </v-app>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import Navbar from '@/components/Navbar';
// eslint-disable-next-line import/no-unresolved
import SocialShareButton from '@/components/SocialShareButton';

export default {
  components: { Navbar, SocialShareButton },
  name: 'App',

  data: () => ({ drawer: null }),
  created() {
    this.$store.dispatch('loadMarkup');
  },
  metaInfo() {
    return {
      title: '',
      meta: [
      ],
    };
  },

};
</script>

<style lang="scss">
  @import './src/styles/overrides.sass';

</style>
