<template>
  <div  class="about-view grey lighten-3">
    <v-container
    >
      <v-row
      class="ma-4"
      dense

      >
        <v-col
        md="10"
        sm="11"
        xl="8"
        xs="12">
          <section v-if="aboutMarkup === 'error'">
              <p class="text-center text-h5">
                We're sorry, we're not able to retrieve this information
                            at the moment, please try back later.</p>
          </section>
          <section v-else-if="aboutMarkup === ''">
            <v-skeleton-loader
              :type="article"
              class="mx-auto"
            ></v-skeleton-loader>

          </section>
          <section v-else>
            <v-sheet
            elevation="2"
            outlined
            rounded>

              <vue-markdown
              :linkify="false"
              :source = "aboutMarkup"
              class="about-view-markdown  px-9 pt-3 pb-6"/>

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
  components: {
    VueMarkdown,

  },
  computed: {
    ...mapState(['aboutMarkup']),
  },
};
</script>

<style lang="scss">
  .about-view-markdown {
    h2{
        margin-top:25px;
        margin-bottom:25px;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .about-view {
          height: 100%;
        }

</style>
