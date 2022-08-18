import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import axios from "./plugins/axios";
// 아래 i18n 임포트 추가
import i18n from "./plugins/i18n";

const app = createApp(App);
app.use(store);
app.use(router(store));
app.use(Quasar, quasarUserOptions);
// 아래 i18n use 추가
app.use(i18n);
app.config.globalProperties.$axios = axios;
app.mount("#app");
