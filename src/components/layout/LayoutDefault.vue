<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Layout Views</q-item-label>
        <q-item clickable tag="a" to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
            <q-item-label caption>홈 페이지 :default layout 확인</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/login">
          <q-item-section avatar>
            <q-icon name="man" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>로그인 페이지 :fluid layout 확인</q-item-label>
          </q-item-section>
        </q-item>
        <q-item-label header>Boilerplate Views</q-item-label>
        <q-item clickable tag="a" to="/plate/forms">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Table</q-item-label>
            <q-item-label caption>폼</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/plate/tables">
          <q-item-section avatar>
            <q-icon name="table" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Table</q-item-label>
            <q-item-label caption>테이블</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";

  export default {
    name: "LayoutDefault",
    setup() {
      return {
        leftDrawerOpen: ref(false),
      };
    },
  };
</script>
