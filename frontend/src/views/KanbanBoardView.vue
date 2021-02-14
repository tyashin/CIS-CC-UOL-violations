<template>
  <div  class="kanban-board-view background-lite">
      <v-container fluid>
        <v-row>
          <v-col
          col="12"
          >
            <v-progress-linear v-if="listOfcases.length == 0"
              color="secondary"
              indeterminate
            ></v-progress-linear>
            <section v-if="dataError">
                <p class="text-center text-h5">
                  We're sorry, we're not able to retrieve this information
                              at the moment, please try back later.</p>
            </section>
            <section v-else>
                <div>
                  <kanban-board class="kboard"
                  :stages="stages"
                  :blocks="listOfcases"
                  @update-block="updateBlock">

                    <div v-for="stage in stages" :slot="stage" :key="stage">
                      <h2>{{ stage }}</h2>
                    </div>

                    <div
                    v-ripple="{ center: true, class: 'quinary--text'}"
                    @click="routeToSingleCaseView(block.id)"
                    class="compact-case"
                    v-for="block in listOfcases" :slot="block.id" :key="block.id">

                        <div>
                        <p class="text-body-2">
                            <vue-markdown
                              :linkify="false"
                              :source = "block.name"
                            />
                          </p>

                          <p class="text-body-2"> <Strong>Date:</Strong> {{ block.date }}</p>
                          <p class="text-body-2"> <Strong>Severity:</Strong>
                          {{ block.severity }}</p>

                        </div>

                        <v-progress-linear
                        :color ="severityColor[block.severity]" rounded value="100">
                        </v-progress-linear>
                      </div>

                  </kanban-board>

                </div>

              </section>

          </v-col>
        </v-row>
      </v-container>
      <v-snackbar
        v-model="showHint"
        :timeout="4000"
        elevation="3"
        rounded

      >
      <p class="text-center">
        <router-link to="/contribute" >Click here</router-link>  to learn how to change case status.
      </p>
      </v-snackbar>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import VueMarkdown from 'vue-markdown';

export default {

  name: 'KanbanBoardView',
  components: {
    VueMarkdown,

  },
  computed: {
    ...mapState(['listOfcases', 'dataError']),
  },
  methods: {
    updateBlock() {
      this.showHint = true;
    },
    routeToSingleCaseView(caseId) {
      // eslint-disable-next-line no-undef
      this.$router.push({ name: 'SingleCaseView', params: { caseId } });
    },

  },
  data() {
    return {
      stages: ['Backlog', 'Analysis', 'Official complaint', 'Online petition', 'Resolved'],
      showHint: false,
      severityColor: {
        High: 'pink darken-4',
        Medium: 'lime darken-3',
        Low: 'deep-purple lighten-1',
      },
    };
  },
};
</script>

<style lang="scss">
  @import '../styles/kanban.scss';

  .kanban-board-view {
          height: 100%;

  }

  .kboard {
    touch-action: pan-y;
  }
  .compact-case {
    touch-action: none;
    :hover {
    cursor: pointer;
  }
}

</style>
