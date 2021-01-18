<template>
  <div class="Site">
    <div class="SiteHeader">
      <div @click="$router.back()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </div>

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
      <div class="SiteBodyImage">
        <img :src="site.images[0]" :alt="site.title" />
      </div>
      <div class="List">
        <div class="ListItem">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              /></svg
          ></span>
          <div class="end">
            <p>
              {{
                `${site.contacts?.main?.firstName || "--"} ${site.contacts?.main
                  ?.lastName || "--"}`
              }}
            </p>
            {{ site.contacts?.main?.jobTitle || "--" }}
          </div>
        </div>
        <div class="ListItem">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
          </span>

          <span> {{ site.contacts?.main?.phoneNumber || "--" }}</span>
        </div>
        <div class="ListItem">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
              /></svg
          ></span>
          <span> {{ site.contacts?.main?.email || "--" }}</span>
        </div>
        <div class="ListItem">
          <span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              /></svg
          ></span>
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
    site: state => state.sites.site
  }),
  created() {
    this.$store.dispatch("sites/fetchSite", this.id);
  }
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
    justify-content: start;
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
    div {
      svg {
        width: 2.5em;
        cursor: pointer;
      }
    }
    &Description {
      h2 {
        margin: 0.5em 0 0.25em;
        font-size: 1.2em;
      }
      p {
        margin-bottom: 0.25em;
        font-size: 0.95em;
        line-height: 162%;
      }
      span {
        font-size: 0.75em;
      }
    }
  }
  &Body {
    .List {
      @include md {
        margin: 2em;
        border: 1px solid var(--light-grey);
        border-radius: 3px;
      }
      &Item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--light-grey);
        padding: 1em 0.5em;
        @include md {
          padding: 1em;
        }
        span {
          &:last-child {
            text-align: end;
          }
        }
        .end {
          text-align: end;
        }
        span {
          svg {
            width: 2.5em;
            height: 2.5em;
          }
        }
      }
    }
    &Image {
      border-radius: 4px;

      img {
        width: 100%;

        object-fit: cover;
      }
    }
  }
}
</style>
