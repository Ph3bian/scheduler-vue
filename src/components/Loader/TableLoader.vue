<template>
  <div class="TableLoader">
    <div class="header">Loading....</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: Array(7).fill("5")
    };
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/styles";
.TableLoader {
  border: 1px solid var(--light-grey);
  border-radius: 4px;

  .header {
    display: grid;
    place-items: center;
    border-bottom: 1px solid var(--light-grey);
  }
  .body {
    display: grid;
    place-items: center;
  }
}
</style>
