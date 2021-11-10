<template>
  <div class="login">
    <div class="login__container">
      <form v-if="!isRegistered" @submit.prevent="loginHandler">
        <input v-model="formBody.email" type="email" placeholder="e-posta adresiniz" />
        <input  v-model="formBody.password" type="text" placeholder="Şifreniz..." />
        <button type="submit">Giriş yap</button>
        <button type="button" @click="isRegistered = true">
          Yeni üyelik oluştur
        </button>
      </form>

      <form v-else @submit.prevent="registerHandler">
        <input
          v-model="formBody.fullname"
          type="text"
          placeholder="İsim soyisim"
        />
        <input
          v-model="formBody.email"
          type="email"
          placeholder="e-posta adresiniz"
        />
        <input
          v-model="formBody.password"
          type="text"
          placeholder="Şifreniz..."
        />
        <button type="submit">Üye ol</button>
        <button type="type" @click="isRegistered = false">
          Hesabım var giriş yap
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user";
export default {
  name: "login",
  data() {
    return {
      isRegistered: false,
      formBody: {
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginHandler() {
      const isValidate = this.validateHandler(
        this.formBody.email,
        this.formBody.password
      );

      if (!isValidate) return;

      UserService.login(this.formBody.email, this.formBody.password)
        .then((resp) => console.log(resp))
        .catch();
    },
    registerHandler() {
      const isValidate = this.validateHandler(
        this.formBody.fullname,
        this.formBody.email,
        this.formBody.password
      );

      if (!isValidate) return;
      UserService.register(this.formBody)
        .then((resp) => console.log('resp :>> ', resp))
        .catch((e) => console.log('e :>> ', e));
    },
    validateHandler(...params) {
      return params.every((el) => el);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>