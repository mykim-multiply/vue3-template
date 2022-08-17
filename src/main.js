import { createApp } from "vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import App from "./App.vue";
import store from "./store";

const app = createApp(App);
app.use(store);
app.use(Quasar, quasarUserOptions);
app.mount("#app");
