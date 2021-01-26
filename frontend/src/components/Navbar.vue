<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text-h5 text-center font-weight-bold red--text text--accent-2">
          UOL
        </v-list-item-title>
        <v-list-item-subtitle class="text-subtitle-1 font-weight-bold text-center  red--text text--accent-2">
          violations tracker
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.route"
        link
        router
      >

        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        target="_blank"
        :href="'https://github.com/tyashin/CIS-CC-UOL-violations'"
      >
        <v-list-item-icon>
          <v-icon>{{ "mdi-github" }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>GitHub page</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-btn
      absolute
      block
      bottom
      class="mb-n4"
      depressed
      href="mailto:uolviolationstracker@protonmail.com"
      tile
    >
      <v-icon left>
        mdi-email-edit
      </v-icon>
      E-mail us
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  components: {},
  data () {
    return {
      links: [
        { icon: 'mdi-information', text: 'About', route: '/' },
        { icon: 'mdi-clipboard-list', text: 'List of cases', route: '/cases' },
        { icon: 'mdi-view-dashboard', text: 'Kanban board', route: '/board' },
        { icon: 'mdi-handshake', text: 'How to contribute', route: '/contribute' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
