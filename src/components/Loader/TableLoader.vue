<template>
  <table>
    <thead>
      <tr>
        <th v-for="(item, index) in data" :key="index">
          <div class="line s_shimmer">&nbsp;</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in dataRow" :key="index">
        <td v-for="(item, index) in data" :key="index">
          <div class="line s_shimmer">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      data: Array(7).fill("5"),

      dataRow: Array(12).fill("5"),
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles";

table {
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid var(--light-grey);
  width: 100%;
  border-radius: 4px;
  border-bottom: 1px solid var(--light-grey);
  background: transparent;
  thead {
    tr {
      border-bottom: 1px solid var(--light-grey);
    }
  }
  thead,
  tbody {
    tr {
      th,
      td {
        padding: 0.875em 1em;
        .line {
          left: 0;
          width: 100%;
          margin: 2.5px 0;
          min-width: 8em;
          height: 0.8em;
          border-radius: 4px;
        }
        .s_shimmer {
          background-color: var(----shimmerWhite);
          background-image: var(--shimmerBackgroundImage);
          animation-duration: 1s;
          animation-fill-mode: forwards;
          animation-iteration-count: infinite;
          animation-name: Shimmer;
          animation-timing-function: linear;
        }
      }
    }
  }
}
@keyframes Shimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>
