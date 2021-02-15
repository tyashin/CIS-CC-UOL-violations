<template>
  <div  class="about-view  background-lite">
    <v-container>
      <v-row
      class="ma-4"
      dense>
        <v-col
        md="10"
        sm="11"
        xl="8"
        xs="12">

          <v-progress-linear v-if="!aboutMarkup"
            color="secondary"
            indeterminate
          ></v-progress-linear>

          <section v-if="dataError">
              <p class="text-center text-h5">
                We're sorry, we're not able to retrieve this information
                            at the moment, please try back later.</p>
          </section>
          <section v-else>
            <v-sheet
            elevation="3"
            rounded
            >
            <div class="common-document-markdown px-2 px-sm-3 px-md-9 pt-3 pb-6">
              <vue-markdown
                :linkify="false"
                :source = "aboutMarkup"
              />

              <h2>Comments</h2>
              <div class='comments'>
              <Disqus />
              </div>

            </div>

            </v-sheet>
          </section>
        </v-col>
      </v-row>

    </v-container>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';
import { mapState } from 'vuex';

export default {
  name: 'AboutView',

  data() {
    return {
      pageConfig: {
        title: 'University of London BSc Computer  science programs policies and agreements violations tracker',
        identifier: '/',
        url: 'https://uolviolationstracker.web.app',
      },
    };
  },
  components: {
    VueMarkdown,

  },
  computed: {
    ...mapState(['aboutMarkup', 'dataError']),
  },
};
</script>

<style lang="scss">

   .about-view {
           height: 100%;
         }

</style>
