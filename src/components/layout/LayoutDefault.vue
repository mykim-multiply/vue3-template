<template>
  <q-layout view="lHh Lpr lFf">
    <GlobalHeader />
    <q-page-container>
      <GlobalLeftBar />
      <router-view />
      <GlobalRightBar />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  import GlobalHeader from "./partials/GlobalHeader";
  import GlobalLeftBar from "./partials/GlobalLeftBar";
  import GlobalRightBar from "./partials/GlobalRightBar";

  export default {
    name: "LayoutDefault",
    components: {
      GlobalHeader,
      GlobalLeftBar,
      GlobalRightBar,
    },
    setup() {
      return {
        leftDrawerOpen: ref(false),
      };
    },
  };
</script>
