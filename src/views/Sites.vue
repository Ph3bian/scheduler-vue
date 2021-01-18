<template>
  <div class="Sites">
    <div class="SitesList">
      <ListItem :sites="sites" :viewSite="viewSite" />
    </div>
    <div class="SitesTable">
      <Table :data="sites" :headers="headers" :handleRowClick="viewSite" />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { format } from "date-fns";
import ListItem from "@/components/ListItem.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    ListItem,
    Table
  },
  data() {
    return {
      bottom: false,
      headers: [
        { name: "title" },
        // { name: "images", formatter: data => data[0] },
        {
          name: "contacts",
          formatter: ({ main }) =>
            `${main.firstName} ${main.lastName} - ${main.email}`
        },
        {
          name: "address",
          formatter: ({ street, city, state, country, zipCode }) =>
            `${street}, ${city}, ${state}, ${country} (Zip Code: ${zipCode}) `
        },
        { name: "tags", formatter: data => data.join(", ") },
        {
          name: "createdAt",
          formatter: data => format(new Date(data), "yyyy/MM/dd HH:mm:ss")
        },
        {
          name: "updatedAt",
          formatter: data => format(new Date(data), "yyyy-MM-dd HH:mm:ss")
        }
      ]
    };
  },
  watch: {
    bottom(newValue) {
      console.log(newValue);
      if (newValue) {
        this.addSite();
      }
    }
  },
  computed: mapState({
    sites: state => state.sites.data
  }),
  created() {
    this.fetchSite();
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
  },
  methods: {
    viewSite(id) {
      this.$router.push(`/sites/${id}`);
    },
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    fetchSite() {
      this.$store.dispatch("sites/fetchSites");
    },
    addSite() {
      if (this.bottomVisible()) {
        this.$store.dispatch("sites/addSite");
        this.fetchSite();
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/styles";
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
      padding: 2em;
    }
  }
}
</style>
