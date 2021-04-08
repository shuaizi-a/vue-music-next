<template>
  <div class="header">
    <span class="icon"></span>
    <h1 class="text">Chicken Music</h1>
  </div>
</template>

<script>
export default {
  name: "m-header",
};
</script>

<style lang="scss" scoped>
.header {
  height: 44px;
  color: $color-theme;

  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    display: inline-block;
    width: 30px;
    height: 32px;
    margin-right: 9px;
    @include bg-image("logo");
    background-size: 30px 32px;
  }
  .text {
    display: inline-block;
    font-size: $font-size-large;
  }
  // .mine {
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   .icon-mine {
  //     display: block;
  //     padding: 12px;
  //     font-size: $font-size-large-x;
  //     color: $color-theme;
  //   }
  // }
}
</style>
