import { createApp } from "vue";
import { Quasar } from "quasar";
// 아래 dayjs 임포트
import dayjs from "dayjs";
import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import axios from "./plugins/axios";
import i18n from "./plugins/i18n";

const app = createApp(App);
app.use(store);
app.use(router(store));
app.use(Quasar, quasarUserOptions);
app.use(i18n);
app.config.globalProperties.$axios = axios;
// 아래 dayjs 전역등록
app.config.globalProperties.$dayjs = dayjs;
app.mount("#app");
