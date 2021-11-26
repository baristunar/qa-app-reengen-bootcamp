<template>
  <div id="app">
    <Loader v-if="isLoading" />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/partials/navbar/index.vue";
import Loader from "@/components/UI/loader";
import { mapGetters } from 'vuex';
export default {
  components: {
    Navbar,
    Loader,
  },
  computed:{
    ...mapGetters({
      isLoading:"loader/_isLoading"
    })
  }
};
</script>

<style lang="scss">
</style>
