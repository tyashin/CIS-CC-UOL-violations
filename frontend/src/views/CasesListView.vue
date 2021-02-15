<template>
  <div class="cases-list-view background-lite">
    <v-row
      class="pt-6"
      >
      <section v-if="dataError">
        <p class="text-center text-h5">
            We're sorry, we're not able to retrieve this information
                        at the moment, please try back later.</p>
      </section>
      <section v-else-if="getNumberOfCases == 0">
        <v-progress-linear
          color="secondary"
          indeterminate
        ></v-progress-linear>
      </section>
    </v-row>

    <section class="mb-12" v-if="getNumberOfCases">
      <SingleCaseView
        :caseIdAsProp=this.currentPage
        :key="this.currentPage"
      >
      </SingleCaseView>
    </section>

    <v-bottom-navigation fixed
      background-color='background-lite'
    >
      <v-pagination class="bottomPagination pt-1"
        v-model="currentPage"
        :length="getNumberOfCases"
        next-icon="mdi-menu-right"
        prev-icon="mdi-menu-left"
        total-visible=7
        @input="handlePageChange"
      ></v-pagination>

    </v-bottom-navigation>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import SingleCaseView from './SingleCaseView.vue';

export default {
  name: 'CasesListView',
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    SingleCaseView,

  },
  created() {

  },
  methods: {
    handlePageChange(newPage) {
      this.currentPage = newPage;
    },

  },

  computed: {

    ...mapState(['dataError']),
    ...mapGetters(['getNumberOfCases']),

  },

};
</script>

<style lang="scss">

  .cases-list-view {
          height: 100%;
        }

</style>
