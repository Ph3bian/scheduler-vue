<template>
  <div class="Site">
    <div class="SiteHeader"></div>
    <Details :sites="site" />
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    site: state => state.sites.site
  }),
  mounted() {
    this.$store.dispatch("sites/fetchSite", this.$route.params.id);
  }
};
</script>

<style scoped lang="scss">
@import "@/styles";
.Site {
  &Header {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2em;
    align-items: center;
    &Content {
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      column-gap: 1em;
      &Image {
        border: 1px solid var(--light-grey);
        width: 3em;
        height: 3em;
        border-radius: 50%;
        img {
          width: 3em;
          height: 3em;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
