<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    sites: {
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
