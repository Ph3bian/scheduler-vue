<template>
  <table class="Table">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header.name }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(site, id) in data" :key="id">
        <td v-for="header in headers" :key="header">
          {{
            header.formatter
              ? header.formatter(site[header.name])
              : site[header.name]
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    
    },
    headers: {
      type: Array
    }
  },
  methods: {
    viewSite(id) {
      this.$router.push(`sites/${id}`);
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/styles";
.Table {
  border-collapse: collapse;
  border-spacing: 0;

  tbody {
    tr {
      &:nth-of-type(odd) {
        background: #f8f8f8;
        border-top: 1px solid var(--light-grey);
        border-bottom: 1px solid var(--light-grey);
      }
      td {
        font-size: 0.8em;
        padding: 1em 0.75em;
        color: var(--grey);
      }
    }
  }
  thead {
    tr {
      th {
        padding: 1em 0.75em;
        text-align: left;
        vertical-align: bottom;
        font-size: 0.75em;
        font-weight: normal;
        color: var(--light-grey-2);
        text-transform: uppercase;
      }
    }
  }
}
</style>
