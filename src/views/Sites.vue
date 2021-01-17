<template>
  <div>
    <ListItem :sites="sites" />
    <Table :data="sites" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import ListItem from "@/components/ListItem.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    ListItem,
    Table
  },
  computed: mapState({
    sites: state => state.sites.data
  }),
  mounted() {
    this.$store.dispatch("sites/fetchSites");
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles";
.ListItem {
  display: grid;
  grid-template-columns: 5em auto auto;
  padding: 1em;
  column-gap: 1em;
  align-items: center;
  border: 1px solid var(--light-grey);
  &Image {
    border-radius: 50%;
    height: 4em;
    width: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--light-grey);
    img {
      width: 4em;
      height: 4em;
      border-radius: 50%;
    }
  }
  &Arrow {
    margin-left: auto;
    width: 3em;
  }
}
</style>
