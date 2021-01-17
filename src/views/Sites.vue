<template>
  <div class="Sites">
    <div class="SitesList">
      <ListItem :sites="sites" />
    </div>
    <div class="SitesTable">
      <Table :data="sites" :headers="headers" />
    </div>
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
  data() {
    return {
      headers: [
        "title",
        "images",
        "address",
        "contacts",
        "tags",
        "createdAt",
        "updatedAt"
      ]
    };
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
.Sites {
  &List {
    display: block;
    @include md {
      display: none;
    }
  }
  &Table {
    display: none;
    @include md {
      display: block;
    }
  }
}
</style>
