<template>
  <div class="profile container py-2 px-4 col-10 py-md-3 px-md-5 col-md-10">
    <div
      class="profile-picture d-flex flex-column justify-content-center align-items-center mt-3 mb-5"
    >
      <img
        src="@/assets/user-profile-picture.png"
        alt="Photo de profil de l'utilisateur"
      />
      <button class="btn btn-primary col-10 mt-3">
        Modifier la photo de profil
      </button>
    </div>
    <div class="profile-email mb-5 text-center">
      <div class="mb-2">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" />
      </div>
      <button class="btn btn-primary col-10">Modifier l'email</button>
    </div>
    <div class="profile-password mb-5 text-center">
      <div class="mb-2">
        <label for="password" class="form-label">Mot de passe</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <button class="btn btn-primary col-10">Modifier le mot de passe</button>
    </div>
    <div class="profile-delete mb-2">
      <button class="btn btn-secondary col-12">Supprimer le compte</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheProfileModifier",
};
</script>

<style scoped lang="scss">
.profile {
  background-color: $white !important;
  border-radius: 16px;
  &-picture {
    & img {
      width: 100px;
      height: 100px;
    }
  }
}
.form {
  &-label {
    font-size: 16px;
    font-weight: 400;
    font-weight: 500;
  }
  &-control {
    border: none;
    padding: 12px;
    background: $gray;
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
      outline: none;
    }
  }
}
.btn {
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  &-primary {
    background: $color-tertiary;
    &:hover {
      background: darken($color-tertiary, 5%);
    }
    &:focus {
      background: darken($color-tertiary, 5%);
      box-shadow: 0px 0px 0px 4px rgba($color-tertiary, 0.5);
      outline: none;
    }
  }
  &-secondary {
    background: $color-primary;
    &:hover {
      background: darken($color-primary, 5%);
    }
    &:focus {
      background: darken($color-primary, 5%);
      box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
      outline: none;
    }
  }
}
</style>
