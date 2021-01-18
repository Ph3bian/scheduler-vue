<template>
  <div class="Header">
    <div class="HeaderMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
    <div class="HeaderName">Scheduling</div>
    <div class="HeaderProfile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
        />
      </svg>
      <div class="HeaderProfileInitials">P</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMenu: {
      type: Boolean,
      required: true,
      default: false,
    },
    menuItems: {
      type: Array,
    },
  },
};
</script>

<style lang="scss">
@import "@/styles";
.Header {
  display: grid;
  grid-template-columns: repeat(3, auto);
  background-color: var(--primary-color);
  color: var(--light);
  padding: 0.875em 1.9em;
  text-align: center;
  &Name {
    font-size: 1.3em;
    font-weight: bold;
  }
  &Profile {
    margin-left: auto;
    display: flex;
    &Initials {
      border-radius: 50%;
      margin-left: auto;
      height: 1.7em;
      width: 1.7em;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--light);
      color: var(--dark);
      margin-left: 0.875em;
    }
  }
  &Menu {
    margin-right: auto;
  }
}
</style>
