<template>

<div  class="kanban-board-view background-lite">
    <v-container fluid>
      <v-row
      >
        <v-col
        col="12"
        >

          <v-progress-linear v-if="listOfcases.length == 0"
            color="secondary"
            indeterminate
          ></v-progress-linear>
          <section v-if="listOfcases === 'error'">
              <p class="text-center text-h5">
                We're sorry, we're not able to retrieve this information
                            at the moment, please try back later.</p>
          </section>
          <section v-else>

              <div>
                <kanban-board class="kboard"
                :stages="stages" :blocks="listOfcases" @update-block="updateBlock">

                  <div v-for="stage in stages" :slot="stage" :key="stage">
                    <h2>{{ stage }}</h2>
                  </div>

                  <div v-for="block in listOfcases" :slot="block.id" :key="block.id">

                      <div>
                        <p class="text-body-2">{{ block.name }}</p>
                      </div>
                      <div>
                        <p class="text-body-2"> <Strong>Date:</Strong> {{ block.date }}</p>
                        <p class="text-body-2"> <Strong>Severity:</Strong> {{ block.severity }}</p>
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
      :timeout="3000"
      elevation="2"
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
// import CaseCard from '../components/CaseCard.vue';

export default {

  name: 'KanbanBoardView',
  components: {

  },
  computed: {
    ...mapState(['listOfcases']),
  },
  methods: {
    updateBlock() {
      this.showHint = true;
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

</style>
