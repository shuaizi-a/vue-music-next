<template>
  <!-- 头部 -->
  <m-header></m-header>
  <!-- tab切换 -->
  <tab></tab>
  <!-- 路由展示 -->
  <router-view></router-view>
</template>

<script>
import Header from "@/components/header/header";
import Tab from "@/components/tab/tab";

export default {
  components: {
    MHeader: Header,
    Tab,
  },
};
</script>


<style lang="scss">
</style>
