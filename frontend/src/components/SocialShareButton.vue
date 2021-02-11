<template>
  <div>
    <v-speed-dial
      v-model="dialShare"
      absolute
      bottom
      direction="left"
      right
    >
      <template v-slot:activator>
        <v-btn
          bottom
          fab
          small
        >
          <v-icon v-if="dialShare">mdi-close</v-icon>
          <v-icon v-else>mdi-share-variant-outline</v-icon>
        </v-btn>
      </template>
      <v-btn
        :href="`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`"
        bottom
        color="blue darken-7"
        dark
        fab
        small
        target="_blank"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        :href="`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`"
        bottom
        color="blue"
        dark
        fab
        small
        target="_blank"
      >
        <v-icon>mdi-facebook</v-icon>
      </v-btn>
      <v-btn
        :href="`https://wa.me/?text=Checkout%20this%20page:%20${pageUrl}`"
        bottom
        color="green"
        dark
        fab
        small
        target="_blank"
      >
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>

      <v-btn
        :href="`https://telegram.me/share/url?url=${pageUrl}&text=Checkout this page!`"
        bottom
        color="blue"
        dark
        fab
        small
        target="_blank"
      >
        <v-icon>mdi-telegram</v-icon>
      </v-btn>

      <v-btn
        :href="`mailto:?subject=
        UOL violations tracker&amp;body=Checkout this page:%20<a href='${pageUrl}'>${pageUrl}</a>`"
        bottom
        color="tertiary"
        dark
        fab
        small
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

  data() {
    return {
      dialShare: false,
      pageUrl: 'https://uolviolationstracker.web.app',
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
