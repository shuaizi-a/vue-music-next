import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";

// 引入全局样式文件
import "@/assets/scss/index.scss";
import "vant/lib/index.css";

createApp(App)
  .use(store)
  .use(router)
  .use(Vant)
  .mount("#app");
