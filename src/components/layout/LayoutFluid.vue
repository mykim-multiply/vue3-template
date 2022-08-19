<template>
  <q-layout view="lHh Lpr lFf">
    <GlobalHeader />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import GlobalHeader from "./partials/GlobalHeader";

  export default {
    name: "LayoutFluid",
    components: {
      GlobalHeader,
    },
    setup() {
      return {};
    },
  };
</script>
