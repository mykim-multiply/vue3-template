import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import store from "./store";
import router from "./routes";
import axios from "./plugins/axios";

const app = createApp(App);
app.use(store);
app.use(router(store));
app.use(Quasar, quasarUserOptions);
app.config.globalProperties.$axios = axios;
app.mount("#app");
