import { createI18n } from "vue-i18n";

// json file reader function
function loadLocaleMessages() {
  const requireLang = require.context("@/translations", true, /\.json$/);
  const messages = {};
  // json file read
  // eslint-disable-next-line no-restricted-syntax
  for (const file of requireLang.keys()) {
    // eslint-disable-next-line no-continue
    if (file === "./index.js") continue; // except index.js
    const path = file.replace(/(\.\/|\.json$)/g, "").split("/");
    path.reduce((o, s, i) => {
      if (o[s]) return o[s];
      o[s] = i + 1 === path.length ? requireLang(file) : {};
      return o[s];
    }, messages);
  }
  return messages;
}

const i18n = createI18n({
  // option here
  legacy: false,
  locale: "jp",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});
export default i18n;
