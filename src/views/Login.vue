<template>
  <div class="login d-flex justify-content-center align-items-center">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background-color: $color-tertiary;
  background: url(@/assets/LoginPageBackground.jpg) center no-repeat;
  background-size: cover;
}
</style>
