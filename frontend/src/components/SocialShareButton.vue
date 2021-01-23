<template>
  <div>
    <v-speed-dial
      v-model="dialShare"
      absolute
      right
      bottom
      direction="left"
    >
      <template v-slot:activator>
        <v-btn
          fab
          bottom
          x-small
          color="red"
        >
          <v-icon v-if="dialShare">mdi-close</v-icon>
          <v-icon v-else>mdi-share-variant</v-icon>
        </v-btn>
      </template>
      <v-btn
        dark
        fab
        bottom
        color="blue darken-7"
        x-small
        :href="`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`"
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        bottom
        color="blue"
        x-small
        :href="`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`"
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        dark
        fab
        bottom
        color="green"
        x-small
        :href="`https://wa.me/?text=Checkout%20this%20page:%20${pageUrl}`"
        target="_blank"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

      <v-btn
        dark
        fab
        bottom
        color="blue"
        x-small
        :href="`https://telegram.me/share/url?url=${pageUrl}&text=Checkout this page!`"
        target="_blank"
      >
        <v-icon>mdi-telegram</v-icon>
      </v-btn>

      <v-btn
        dark
        fab
        bottom
        color="tertiary"
        x-small
        :href="`mailto:?subject=UOL violations tracker&amp;body=Checkout this page!<a href='${pageUrl}'>${pageUrl}</a>`"
        target="_blank"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: 'SocialShareButton',

  data () {
    return {
      dialShare: false,
      pageUrl: 'https://uolviolationstracker.web.app'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
