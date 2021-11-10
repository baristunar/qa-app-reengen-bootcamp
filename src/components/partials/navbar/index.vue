<template>
<header class="nav">
      <nav class="nav__menu">
          <router-link exact-active-class="nav__menu-link-active" :to="{name:'homepage'}" class="nav__menu-link">Q/A</router-link>
          <router-link active-class="nav__menu-link-active" :to="{name:'new-question'}" class="nav__menu-link">Yeni soru yaz</router-link>
          <router-link active-class="nav__menu-link-active" to="/favorites" class="nav__menu-link">Favorilerim</router-link>
      </nav>
      <input type="text" placeholder="Arama yapınız...">

      <div class="nav__account">
          <button>Giriş yap</button>
          <div v-if="false">Barış Tunar</div>
          <button v-if="false">Çıkış yap</button>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import './index.scss';
</style>