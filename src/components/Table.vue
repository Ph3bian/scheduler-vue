<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(site, id) in data" :key="id">
        <td v-for="header in headers" :key="header">
          {{ site[header] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => null
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
