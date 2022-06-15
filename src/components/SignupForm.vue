<template>
  <div
    id="form"
    class="container py-2 px-4 col-10 py-md-3 px-md-5 col-md-8 text-center"
  >
    <img
      src="@/assets/logo.svg"
      alt="Logo Groupomania"
      class="mt-2 mb-5 mt-md-3 mb-md-5"
    />
    <form @submit.prevent="signup">
      <div class="row">
        <div class="mb-3">
          <label for="firstname" class="form-label">Prénom</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            v-model="user.firstname"
          />
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">Nom</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            v-model="user.lastname"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="text"
            class="form-control"
            id="email"
            v-model="user.email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="user.password"
          />
        </div>
        <div class="my-3 d-grid">
          <button type="submit" class="btn btn-primary mt-3 p-1">
            S'inscrire
          </button>
        </div>
      </div>
    </form>
    <div class="row mt-3">
      <p class="text-light">
        Déjà un compte ? <br />
        <router-link to="/" class="link">Connectez-vous</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { AuthService } from "@/services";
export default {
  name: "signup-form",
  data() {
    return {
      user: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signup() {
      try {
        const credentials = {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          password: this.user.password,
        };
        await AuthService.signup(credentials);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
#form {
  background-color: rgba($color-primary, 0.55);
  border-radius: 16px;
  & img {
    height: 40px;
    width: auto;
  }
}
.form {
  &-label {
    color: $white;
    font-size: 16px;
    font-weight: 400;
  }
  &-control {
    border: none;
    padding: 12px;
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
      outline: none;
    }
  }
}
.btn-primary {
  background: $color-tertiary;
  font-weight: 700;
  font-size: 24px;
  border-radius: 8px;
  border: none;
  &:hover {
    background: darken($color-tertiary, 5%);
  }
  &:focus {
    background: darken($color-tertiary, 5%);
    box-shadow: 0px 0px 0px 4px rgba($color-tertiary, 0.5);
    outline: none;
  }
}
.link {
  color: $color-tertiary;
  font-weight: 600;
  font-size: 20px;
  &:hover {
    color: darken($color-tertiary, 5%);
  }
}
</style>
