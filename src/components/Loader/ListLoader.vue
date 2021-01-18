<template>
  <div class="container">
    <div class="box shimmer" v-for="(item, index) in data" :key="index">
      <div class="circle s_shimmer"></div>
      <div class="lines">
        <div class="line s_shimmer"></div>
        <div class="line s_shimmer"></div>
        <div class="line s_shimmer"></div>
        <div class="line s_shimmer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: Array(10).fill("5"),
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/styles";
.container {
  background: #fff;
  top: 0;
  left: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  position: relative;
  width: 100%;
  height: 6em;
  display: block;
  border-bottom: 1px solid var(--light-grey);
  background: transparent;

  .circle {
    position: absolute;
    left: 1em;
    width: 4em;
    height: 4em;
    border-radius: 100%;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .lines {
    position: absolute;
    width: calc(100% - 110px);
    height: 100%;
    left: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .line {
    position: relative;
    left: 0;
    width: 100%;
    margin: 2.5px 0;
    &:nth-child(2n) {
      height: calc(13% - 5px);
      border-radius: 3px;
    }
    &:nth-child(2n + 1) {
      height: calc(25% - 5px);
      border-radius: 3px;
    }
  }
  .s_shimmer {
    background: rgba(0, 0, 0, 0.08);
    background-color: var(----shimmerWhite);
    background-image: var(--shimmerBackgroundImage);
  }
  &.shimmer {
    overflow: hidden;
    &::after {
      background: linear-gradient(
        90deg,
        rgba(#fff, 0),
        rgba(#fff, 0.2) 30%,
        rgba(#fff, 0.9) 50%,
        rgba(#fff, 0)
      );

      animation: gradient 1600ms infinite;
      animation-timing-function: cubic-bezier(0.38, 0.55, 0.34, 0.95);

      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%) rotate(0deg);
      border-radius: 5px;
    }
  }
}
@keyframes gradient {
  100% {
    transform: translateX(100%) rotate(0deg);
  }
}
</style>
