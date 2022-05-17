<template>
  <div class="posting container my-4">
    <div class="col-12">
      <div class="posting-top py-3">
        <div class="posting-top-profile-picture">
          <img
            src="@/assets/user-profile-picture.png"
            alt="Photo de profil de l'utilisateur"
          />
        </div>
        <input
          type="text"
          placeholder="Quoi de neuf, Utilisateur ?"
          class="posting-top-message"
        />
      </div>
      <div class="posting-bottom row py-2">
        <p class="posting-bottom-GIF col-4">🎥 Partager un GIF</p>
        <p class="posting-bottom-picture col-4">📷 Partager une photo</p>
        <div class="posting-bottom-btn col-4 d-grid">
          <button class="btn btn-primary">Envoyer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostSomething",
};
</script>

<style scoped lang="scss">
.posting {
  background: #fff;
  border-radius: 9px;
  &-top {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    &-profile-picture {
      & img {
        width: 40px;
        height: 40px;
      }
    }
    &-message {
      margin-left: 12px;
      border-radius: 36px;
      padding: 8px 16px;
      background: #f0f2f5;
      border: none;
      width: 100%;
    }
  }
  &-bottom {
    color: #6f7175;
    font-weight: 600;
    align-items: center;
    border-top: #ced0d4 solid 1px;
    &-GIF:hover {
      color: #ea4325;
      font-weight: 900;
      cursor: pointer;
    }
    &-picture:hover {
      color: #ea4325;
      font-weight: 900;
      cursor: pointer;
    }
    & p {
      margin-bottom: 0;
    }
    &-btn {
      & button {
        background: #ea4325;
        color: #fffcf9;
        font-weight: 700;
        font-size: 16px;
        border-radius: 8px;
        border: none;
        &:hover {
          background: #cc2f14;
          color: #fffcf9;
        }
      }
    }
  }
}
</style>
