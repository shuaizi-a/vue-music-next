<template>
  <div class="singer">
    <van-index-bar
      :index-list="indexList"
      :sticky="false"
      :highlight-color="pink"
    >
      <template v-for="(item, index) in singers" :key="index">
        <van-index-anchor class="fixed-title" :index="item.title">
          {{ item.title }}
        </van-index-anchor>
        <van-cell class="bg" v-for="(items, indexs) in item.list" :key="indexs">
          <p>
            <img :src="items.pic" alt="" />
            <span>{{ items.name }}</span>
          </p>
        </van-cell>
      </template>
    </van-index-bar>
  </div>
</template>
<script>
import { getSingerList } from "@/service/singer";
export default {
  name: "singer",
  data() {
    return {
      singers: [],
      indexList: [],
    };
  },
  async created() {
    const result = await getSingerList();
    this.singers = result.singers;

    this.singers.forEach((item) => {
      console.log(item);
      this.indexList.push(item.title);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
  overflow: auto;

  .fixed-title {
    height: 30px;
    line-height: 30px;
    padding-left: 20px;
    font-size: 12px;
    background: #333;
    /deep/ .van-index-anchor {
      padding: 0;
      color: #fff;
    }
  }

  .van-cell::after {
    border: 0;
  }

  .bg {
    background: transparent;
    p {
      padding: 0 10px;
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      span {
        margin-left: 20px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 14px;
      }
    }
  }
}
</style>
