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
  metaInfo: {
    title: 'University of London BSc Computer science programs policies violations tracker',
    name: 'UOL violations tracker',
    meta: [
      { name: 'charset', content: 'utf-8' },
      { name: 'description', content: 'Reviewing University of London Computer science programs policies violations.Only objective info. Comment and contribute your experiences.' },
      { name: 'keywords', content: 'University of London, reviews, BSc in Computer science, university unfair treatment, policies and agreements violations' },
    ],
  },
};
</script>

<style lang="scss">
  @import './src/styles/overrides.sass';
  .common-document-markdown {
    h2{
        margin-top:25px;
        margin-bottom:25px;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
    }
  }
  blockquote {
    padding-left: 15px;
    border-left: 2px solid #CFD8DC;
    font-family: 'Roboto Mono';
    font-size: 14px;
}

.adsbox{
  display: none;
}

</style>
