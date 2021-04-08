<template>
  <!-- 头部 -->
  <m-header></m-header>
  <!-- tab切换 -->
  <tab></tab>

  <!-- 嵌套路由 -->
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- 命名路由 -->
  <!-- <router-view :style="viewStyle" name="user" v-slot="{ Component }">
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view> -->
</template>

<script>
import Header from "@/components/header/header";
import Tab from "@/components/tab/tab";
import { mapState } from "vuex";

export default {
  components: {
    MHeader: Header,
    Tab,
  },
  computed: {
    viewStyle() {
      const bottom = this.playlist.length ? "60px" : "0";
      return {
        bottom,
      };
    },
    ...mapState(["playlist"]),
  },
};
</script>

<style lang="scss"></style>
