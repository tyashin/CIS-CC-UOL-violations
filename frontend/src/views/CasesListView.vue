<template>
  <div class="cases-list-view background-lite">
    <v-container>
      <v-row
      class="ma-4"
      dense>
        <v-col
        md="10"
        sm="11"
        xl="8"
        xs="12">

          <v-pagination
            v-model="page"
            :length="4"

          ></v-pagination>
          <v-progress-linear v-if="true"
            color="secondary"
            indeterminate
          ></v-progress-linear>
          <section v-if="aboutMarkup === 'error'">
              <p class="text-center text-h5">
                We're sorry, we're not able to retrieve this information
                            at the moment, please try back later.</p>
          </section>
          <section v-else>
            <v-sheet
            elevation="2"
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

export default {
  name: 'CasesListView',
  components: {

  },
};
</script>

<style lang="scss">

  .cases-list-view {
          height: 100%;
        }

</style>
