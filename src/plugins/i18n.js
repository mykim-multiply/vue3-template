import { createI18n } from "vue-i18n";
import messages from "../translations";

const i18n = createI18n({
  // option here
  legacy: false,
  locale: "jp",
  fallbackLocale: "en",
  messages,
});
export default i18n;
