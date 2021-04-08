<template>
  <div class="recommend">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in sliders" :key="item.id">
        <a :href="item.link">
          <img :src="item.pic" />
        </a>
      </van-swipe-item>
    </van-swipe>

    <div class="recommend-list">
      <h1 class="list-title" v-show="!loading">热门歌单推荐</h1>
      <ul>
        <li
          v-for="item in albums"
          class="item"
          :key="item.id"
          @click="selectItem(item)"
        >
          <div class="icon">
            <img width="60" height="60" :src="item.pic" />
          </div>
          <div class="text">
            <h2 class="name">
              {{ item.username }}
            </h2>
            <p class="title">
              {{ item.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "@/service/recommend";

export default {
  name: "recommend",
  data() {
    return {
      sliders: [],
      albums: [],
      selectedAlbum: null,
    };
  },
  async created() {
    const result = await getRecommend();
    this.sliders = result.sliders;
    this.albums = result.albums;
  },
};
</script>

<style lang="scss" scoped>
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: auto;
  // display: flex;
  // flex-direction: column;

  .my-swipe {
    // flex: 1;
    margin: 10px 10px;
    border-radius: 6px;
    .van-swipe-item {
      color: #fff;
      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  .recommend-list {
    .list-title {
      height: 65px;
      line-height: 65px;
      text-align: center;
      font-size: $font-size-medium;
      color: $color-theme;
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;

      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
      }
      .name {
        margin-bottom: 10px;
        color: $color-text;
      }
      .title {
        color: $color-text-d;
      }
    }
  }
}
</style>
