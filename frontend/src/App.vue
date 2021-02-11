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
      title: 'Epiloge - Build your network in your field of interest',
      meta: [
        { name: 'description', content: 'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.' },
        { property: 'og:title', content: 'Epiloge - Build your network in your field of interest' },
        { property: 'og:site_name', content: 'Epiloge' },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' },
      ],
    };
  },

};
</script>
