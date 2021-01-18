<template>
  <div class="Sites">
    <div class="SitesHeader">
      <div>All Sites</div>
      <div class="SitesHeaderArrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>
      <div class="SitesHeaderSearch">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </div>
    </div>
    <div class="SitesList">
      <div v-if="loading"><ListLoader /></div>
      <div v-else><ListItem :sites="sites" :viewSite="viewSite" /></div>
    </div>
    <div class="SitesTable">
      <div v-if="loading"><TableLoader /></div>
      <div v-else>
        <Table :data="sites" :headers="headers" :handleRowClick="viewSite" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { format } from "date-fns";
import ListItem from "@/components/ListItem.vue";
import Table from "@/components/Table.vue";
import ListLoader from "@/components/Loader/ListLoader.vue";
import TableLoader from "@/components/Loader/TableLoader.vue";
export default {
  components: {
    ListItem,
    Table,
    ListLoader,
    TableLoader
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
    sites: state => state.sites.data,
    loading: state => state.sites.loading
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
  &Header {
    display: grid;
    grid-template-columns: repeat(3, auto);
    margin: 1em 0.5em;
    align-items: center;
    @include md {
      margin: 1em 2em 0;
    }

    &Search,
    &Arrow {
      svg {
        width: 1.5em;
        height: 1.5em;
        @include md {
          width: 1.5em;
          height: 1.5em;
        }
      }
      margin-left: auto;
    }
    &Arrow {
      margin: auto;
    }
  }
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
