<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark px-3">
      <router-link to="/home" class="navbar-brand">
        <img src="@/assets/logo.svg" alt="Logo Groupomania" />
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
        <ul class="navbar-nav text-center">
          <li class="nav-item ms-4">
            <router-link class="nav-link active" aria-current="page" to="/home"
              >Accueil</router-link
            >
          </li>
          <li class="nav-item ms-4">
            <router-link class="nav-link" to="/profile">Profil</router-link>
          </li>
          <li class="nav-item ms-4">
            <p class="nav-link" @click.prevent="logout">Déconnexion</p>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { AuthService } from "@/services";
export default {
  name: "TheHeader",
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
.navbar {
  background: $color-primary !important;
  &-brand img {
    height: 40px;
  }
  &-toggler {
    color: $color-secondary !important;
  }
}

.nav {
  &-link {
    color: $color-secondary !important;
    cursor: pointer;
    &:hover {
      font-weight: 600;
      color: $white !important;
    }
  }
}
.active {
  color: $white !important;
}
#navbarNav {
  justify-content: flex-end;
}
</style>
