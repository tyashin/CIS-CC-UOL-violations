<template>
 <div  class="single-case-view  background-lite">
    <v-container>
      <v-row
      class="ma-4"
      dense>
        <v-col
        md="10"
        sm="11"
        xl="8"
        xs="12">

          <v-progress-linear v-if="getNumberOfCasess < caseId"
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
            class="single-case-view-markdown px-2 px-sm-3 px-md-9 pt-3 pb-6"
            >

              <vue-markdown
              :linkify="false"
              :source = "'## ' + getSingleCaseById.name"
              />

              <vue-markdown
              :linkify="false"
              :source = "'**Date**: <nbsp/> ' +  getSingleCaseById.date"
              />

              <vue-markdown
              :linkify="false"
              :source = "'**Severity**: <nbsp/> ' +  getSingleCaseById.severity"
              />

              <vue-markdown
              :linkify="false"
              :source = "'**Number of students affected**: <nbsp/> '
              +  getSingleCaseById.numberOfStudents"
              />

             <vue-markdown
              :linkify="false"
              :source = "getSingleCaseById.description"
              />

            </v-sheet>
          </section>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import VueMarkdown from 'vue-markdown';

export default {
  name: 'SingleCaseView',
  components: {
    VueMarkdown,

  },
  data() {
    return {
      caseId: this.$router.currentRoute.params.caseId,

    };
  },

  computed: {
    ...mapState(['dataError']),
    ...mapGetters(['getNumberOfCases']),

    getSingleCaseById() {
      return this.$store.getters.getSingleCaseById(this.caseId);
    },
  },

  methods: {
    getRawCase() {
      return this.listOfcases[this.$router.currentRoute.params.caseId - 1].description;
    },
  },

  props: {

  },

};
</script>

<style lang="scss">

  .single-case-view-markdown {
    h2{
        margin-top:25px;
        margin-bottom:25px;
    }

    p {
      text-align: justify;
      text-justify: inter-word;
    }
  }
  .single-case-view {
           height: 100%;
         }

  .table{
    text-indent: initial;
    padding-top: 6px;
    padding-right: 13px;
    padding-bottom: 6px;
    padding-left: 13px;
    border-spacing: 0;
    border-collapse: collapse;

    tr:nth-child(odd){background-color: #41414b;}
      td, th {
      border: 1px solid #ddd;

      padding: 8px;
    }
    th {
      background-color: #303039;
    }
    td {
      display: table-cell;
      vertical-align: inherit;

    }
  }
  img {
    max-width: 100%;
    box-sizing: initial;
    border-style: none;

        }

</style>