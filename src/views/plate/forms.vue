<template>
  <q-page>
    <button @click="saveCookie">쿠키저장</button>
    <button @click="printCookie">쿠키콘솔</button>
  </q-page>
</template>

<script>
  import { useCookies } from "vue3-cookies";

  const { cookies } = useCookies();
  export default {
    name: "PlateForms",
    methods: {
      saveCookie() {
        cookies.set("test", "Hello?");
      },
      printCookie() {
        const temp = cookies.get("test");
        console.log("cookie > ", temp);
      },
    },
  };
</script>
