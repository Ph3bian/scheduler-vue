<template>
  <div
    class="ListItem"
    v-for="{ title, images, address, contacts, id } in sites"
    :key="title"
    @click="$emit(viewSite(id))"
  >
    <div class="ListItemImage">
      <img :src="images[0]" :alt="title" />
    </div>
    <div class="ListItemDescription">
      <h2>{{ title || "--" }}</h2>
      <p>{{ address?.street || "--" }}</p>
      <span>
        {{ contacts?.main?.firstName || "--" }}
        {{ contacts?.main?.lastName || "--" }}
      </span>
    </div>
    <div class="ListItemArrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sites: {
      type: Array
    },
    viewSite: { type: Function }
  }
};
</script>
<style scoped lang="scss">
@import "@/styles";
.ListItem {
  display: grid;
  grid-template-columns: 5em auto auto;
  padding: 1em 0.5em;
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
      width: 3.5em;
      height: 3.5em;
      border-radius: 50%;
    }
  }
  &Arrow {
    margin-left: auto;
    width: 2.5em;
    cursor: pointer;
  }
  &Description {
    h2 {
      font-size: 1.125em;
    }
  }
}
</style>
