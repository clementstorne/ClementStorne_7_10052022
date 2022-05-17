<template>
  <div id="form" class="container py-2 px-4 col-10 py-md-3 px-md-5 col-md-8">
    <router-link to="/home" class="navbar-brand">
      <img
        src="../assets/logo.png"
        alt="Logo Groupomania"
        class="mt-2 mb-5 mt-md-3 mb-md-5"
      />
    </router-link>
    <form>
      <div class="row">
        <div class="mb-3 mb-md-4">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="mb-3 mb-md-4">
          <label for="password" class="form-label">Mot de passe</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="my-3 mt-md-5 d-grid">
          <button type="submit" class="btn btn-primary mt-3 p-1">
            Se connecter
          </button>
        </div>
      </div>
    </form>
    <div class="row mt-3 mt-md-5">
      <p class="text-light">
        Pas encore de compte ? <br />
        <router-link to="/signup" class="link">Inscrivez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "login-form",
};
</script>

<style scoped lang="scss">
#form {
  background-color: rgba(234, 67, 37, 0.6);
  border-radius: 16px;
  & img {
    height: 40px;
    width: auto;
  }
}
.form {
  &-label {
    color: #fffcf9;
    font-size: 16px;
    font-weight: 400;
  }
  &-control {
    border: none;
    padding: 12px;
  }
}
.btn-primary {
  background: #294c60;
  font-weight: 700;
  font-size: 24px;
  border-radius: 8px;
  border: none;
  &:hover {
    background: darken(#294c60, 5%);
  }
}
.link {
  color: #294c60;
  font-weight: 600;
  font-size: 16px;
  &:hover {
    color: #001b2e;
  }
}
</style>
