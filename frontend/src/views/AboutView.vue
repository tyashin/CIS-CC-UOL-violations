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

              <vue-markdown
              :linkify="false"
              :source = "aboutMarkup"
              class="about-view-markdown px-2 px-sm-3 px-md-9 pt-3 pb-6"/>

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
    ...mapState(['aboutMarkup', 'dataError']),
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
