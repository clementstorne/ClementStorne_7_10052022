<template>
  <div class="login d-flex justify-content-center align-items-center">
    <SignupForm />
  </div>
</template>

<script>
import SignupForm from "@/components/SignupForm.vue";

export default {
  name: "SignupView",
  components: {
    SignupForm,
  },
};
</script>

<style scoped lang="scss">
.login {
  height: 100vh;
  background-color: #294c60;
  background: url(@/assets/LoginPageBackground.jpg) center no-repeat;
  background-size: cover;
}
</style>
