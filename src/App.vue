<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/partials/navbar/index.vue'
export default {
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
</style>
