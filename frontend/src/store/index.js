/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

function parseCaseMarkup(rawCase, caseID) {
  const newCase = {};

  // ID field
  newCase.id = caseID;

  // name field
  let position1 = rawCase.indexOf('**Date**');
  newCase.name = rawCase.slice(0, position1).trim();

  // Date field
  let position2 = rawCase.indexOf('**Severity**');
  newCase.date = rawCase.slice(position1, position2).replace('**Date**:', '').trim();

  // Severity field
  position1 = rawCase.indexOf('**Number of students affected**');
  newCase.severity = rawCase.slice(position2, position1).replace('**Severity**:', '').trim();

  // NumberOfStudents field
  position2 = rawCase.indexOf('**Description**');
  newCase.numberOfStudents = rawCase.slice(position1, position2).replace('**Number of students affected**:', '').trim();

  // Description field
  position1 = rawCase.indexOf('**Kanban status**');
  newCase.description = rawCase.slice(position2, position1).replace('**Description**:', '').trim();

  // Kanban status field
  position2 = rawCase.indexOf('**Status change date**');
  newCase.status = rawCase.slice(position1, position2).replace('**Kanban status**:', '').trim();

  // Status change date field
  newCase.statusChangeDate = rawCase.slice(position2).replace('---', '').trim();

  return newCase;
  // ...
}

export default new Vuex.Store({
  state: {

    aboutMarkup: '',
    howToMarkup: '',
    listOfcases: [],
    dataError: false,

  },
  getters: {
    getNumberOfCases: (state) => state.listOfcases.length,

    getSingleCaseById: (state) => (caseId) => state.listOfcases[caseId - 1],

  },
  mutations: {
    aboutMarkup: (state, payload) => {
      state.aboutMarkup = payload;
    },
    howToMarkup: (state, payload) => {
      state.howToMarkup = payload;
    },
    listOfcases: (state, payload) => {
      state.listOfcases = [...payload];
      // console.log(state.listOfcases);
    },
  },
  actions: {
    loadMarkup: ({ commit }) => {
      Vue.axios.get('https://raw.githubusercontent.com/tyashin/CIS-CC-UOL-violations/master/README.md').then((response) => {
        // Preparing the 'About' page markup
        const readmeMarkup = response.data;
        const startPosition = readmeMarkup.indexOf('## About this project');
        const aboutEndPosition = readmeMarkup.indexOf('## List of cases');
        const aboutMarkup = readmeMarkup.slice(startPosition, aboutEndPosition);
        if (aboutMarkup) {
          commit('aboutMarkup', aboutMarkup);
        } else {
          commit('dataError', true);
          return;
        }

        // Parsing list of cases
        const listOfCasesMarkup = readmeMarkup.slice(aboutEndPosition).replace('## List of cases', '').trim();
        const rawCasesArray = listOfCasesMarkup.split('###');
        const casesArray = [];
        rawCasesArray.forEach((value, index) => {
          if (value) {
            const newCase = parseCaseMarkup(value, index);
            casesArray.push(newCase);
          }
        });

        commit('listOfcases', casesArray);
      }).catch(() => {
        commit('dataError', true);
      });

      Vue.axios.get('https://raw.githubusercontent.com/tyashin/CIS-CC-UOL-violations/master/how_to.md').then((response) => {
        const howtoMarkup = response.data;
        const startPosition = howtoMarkup.indexOf('## What kind of contribution we need');
        const howtoSliced = howtoMarkup.slice(startPosition);
        commit('howToMarkup', howtoSliced);
      }).catch(() => {
        commit('dataError', true);
      });
    },

  },
});
