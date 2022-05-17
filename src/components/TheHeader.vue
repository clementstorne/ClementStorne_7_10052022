<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/home" class="navbar-brand">
        <img src="../assets/logo.png" alt="Logo Groupomania" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item ms-4">
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/profile">Profil</router-link>
          </li>
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/">Déconnexion</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
.navbar {
  background: #ea4325 !important;
  &-brand img {
    height: 40px;
  }
}
#navbarNav {
  justify-content: flex-end;
}
</style>
