<template>
  <div class="Site">
    <div class="SiteHeader">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" /></svg
      ></a>
      <div class="SiteHeaderContent">
        <div class="SiteHeaderImage">
          <img :src="site.images[0]" :alt="site.title" />
        </div>
        <div class="SiteHeaderDescription">
          <h2>{{ site.title }}</h2>
          <p>
            {{
              `${site.address.street}, ${site.address.city}, ${site.address.country} `
            }}
          </p>
          <span>
            {{ site.contacts?.main?.firstName || "--" }}
            {{ site.contacts?.main?.lastName || "--" }}
          </span>
        </div>
      </div>
    </div>
    <div class="SiteBody">
      <div class="List">
        <div class="ListItem">
          <span>Job Title</span>
          <div class="end">
            <p>
              {{
                `${site.contacts?.main?.firstName || "--"} ${
                  site.contacts?.main?.lastName || "--"
                }`
              }}
            </p>
            {{ site.contacts?.main?.jobTitle || "--" }}
          </div>
        </div>
        <div class="ListItem">
          <span>Phone Number</span>
          <span> {{ site.contacts?.main?.phoneNumber || "--" }}</span>
        </div>
        <div class="ListItem">
          <span>Email</span>
          <span> {{ site.contacts?.main?.email || "--" }}</span>
        </div>
        <div class="ListItem">
          <span>Address Information</span>
          <span>
            {{
              `${site.contacts.main.address.street},
            ${site.contacts.main.address.city},
            ${site.contacts.main.address.state},
            ${site.contacts.main.address.country} (Zip Code:
            ${site.contacts.main.address.zipCode}) `
            }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  computed: mapState({
    site: (state) => state.sites.site,
  }),
  created() {
    this.$store.dispatch("sites/fetchSite", this.id);
  },
};
</script>

<style scoped lang="scss">
@import "@/styles";
.Site {
  &Header {
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2em;
    align-items: center;
    background-color: var(--primary-color);
    border-top: 1px solid var(--dark);
    border-bottom: 1px solid var(--dark);
    &Content {
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      column-gap: 1em;
    }
    &Image {
      border: 1px solid var(--light-grey);
      width: 3em;
      height: 3em;
      border-radius: 50%;
      img {
        width: 3em;
        height: 3em;
        border-radius: 50%;
      }
    }
    a {
      svg {
        width: 2.5em;
      }
    }
    &Description {
      h2 {
        margin: 0.5em 0;
        font-size: 1.2em;
      }
      p {
        margin-bottom: 0.5em;
      }
      span {
      }
    }
  }
  &Body {
    .List {
      &Item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--light-grey);
        padding: 1em 0.5em;
        span {
          &:last-child {
            text-align: end;
          }
        }
        .end {
         text-align: end;
        }
      }
    }
  }
}
</style>
