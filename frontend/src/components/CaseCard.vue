<template>
  <div>
    <vue-markdown
              :linkify="false"
              :source = "caseDate"
              class=""/>

    <vue-markdown
              :linkify="false"
              :source = "caseName"
              class=""/>

  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown';

export default {
  name: 'CaseCard',
  components: {
    VueMarkdown,

  },
  data() {
    return {
      caseName: 'test',
      caseDate: 'some date',
    };
  },

  props: {
    caseId: {
      type: String,
      required: true,
    },

  },
};

</script>

<style lang="scss" scoped>
</style>
