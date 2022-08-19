<template>
  <q-header elevated class="glossy">
    <q-toolbar>
      <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" />

      <q-toolbar-title>SH Template</q-toolbar-title>

      <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    name: "GlobalHeader",
    data() {
      return {
        leftDrawerOpen: true,
      };
    },
    methods: {
      toggleLeftDrawer() {
        this.leftDrawerOpen = !this.leftDrawerOpen;
        this.$emit("toggle", this.leftDrawerOpen);
      },
    },
  };
</script>
