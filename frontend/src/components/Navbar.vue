<template>
  <div>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title text-h5 text-center error--text text--accent-1">
          UOL
        </v-list-item-title>
        <v-list-item-subtitle class="text-subtitle-1 text-center  error--text text--accent-1">
          violations tracker
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        link
        router
        :to="link.route"
      >

        <v-list-item-icon>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

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
        { icon: 'mdi-view-dashboard', text: 'Kanban board', route: '/board' },
        { icon: 'mdi-clipboard-list', text: 'List of cases', route: '/cases' },
        { icon: 'mdi-handshake', text: 'Contribute', route: '/contribute' },
        { icon: 'mdi-contacts', text: 'Contact us', route: '/contact' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
