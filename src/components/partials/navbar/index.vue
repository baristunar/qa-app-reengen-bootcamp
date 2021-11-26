<template>
  <header class="nav">
    <nav class="nav__menu">
      <router-link
        exact-active-class="nav__menu-link-active"
        :to="{ name: 'homepage' }"
        class="nav__menu-link"
        >Q/A</router-link
      >
      <router-link
        active-class="nav__menu-link-active"
        :to="{ name: 'new-question' }"
        class="nav__menu-link"
        >Yeni soru yaz</router-link
      >
      <router-link
        active-class="nav__menu-link-active"
        to="/favorites"
        class="nav__menu-link"
        >Favorilerim</router-link
      >
    </nav>
    <input type="text" placeholder="Arama yapınız..." />

    <div class="nav__account">
      <button v-if="!user" @click="$router.push({ name: 'login' })">
        Giriş yap
      </button>
      <div v-if="user">{{ user.fullname }}</div>
      <button v-if="user" @click="logoutHandler">Çıkış yap</button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    logoutHandler() {
      this.$store.commit("user/logout");
    },
  },
  computed: {
    ...mapGetters({
      user: "user/_getUser",
    }),
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>