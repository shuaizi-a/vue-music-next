<template>
  <div class="search">搜索页面</div>
</template>

<script>
import { getSingerList } from "@/service/singer";
export default {
  name: "search",
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
}
</style>
