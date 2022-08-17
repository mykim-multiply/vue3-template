import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import store from "./store";
import router from "./router";

const app = createApp(App);
app.use(store);
app.use(router(store));
app.use(Quasar, quasarUserOptions);
app.mount("#app");
