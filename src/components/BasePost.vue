<template>
  <div class="post container my-4">
    <div class="col-12">
      <div class="post-header">
        <div class="post-header-informations">
          <div class="post-header-informations-profile-picture">
            <img
              src="@/assets/user-profile-picture.png"
              alt="Photo de profil de l'utilisateur"
            />
          </div>
          <div class="post-header-informations-text">
            <p class="post-header-informations-text-author">
              Nom d’utilisateur
            </p>
            <p class="post-header-informations-text-published">
              Publié le xx/xx/xxxx à xx:xx
            </p>
          </div>
        </div>
        <div class="post-header-parameters">⚙️</div>
      </div>
      <div class="post-parameters"></div>
    </div>
    <div class="post-body">
      <p class="text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        explicabo ea quasi recusandae? Corporis sapiente ab, libero tempore
        voluptatibus assumenda saepe quisquam voluptas expedita consequuntur ea
        et debitis dolore inventore impedit maiores, asperiores possimus
        laudantium beatae facilis quod. Placeat iure itaque, qui voluptate
        possimus obcaecati. Minima quis tempora harum amet?
      </p>
      <img
        src="https://images.unsplash.com/photo-1652767050717-42f222b0e86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80"
        alt=""
      />
    </div>
    <div class="post-interactions row">
      <div class="post-interactions-like col-4">
        <p class="post-interactions-count">👍 12</p>
      </div>
      <div class="post-interactions-dislike col-4">
        <p class="post-interactions-count">👎 12</p>
      </div>
      <div class="post-interactions-comment col-4">
        <p class="post-interactions-count">💬 12</p>
      </div>
    </div>
    <input
      type="text"
      placeholder="Écrivez un commentaire"
      class="post-comment col-12"
    />
  </div>
</template>

<script>
export default {
  name: "BasePost",
};
</script>

<style scoped lang="scss">
.post {
  background: #fff;
  border-radius: 9px;
  padding: 12px 16px 0;
  &-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    &-informations {
      display: flex;
      flex-flow: row nowrap;
      &-profile-picture img {
        width: 40px;
        height: 40px;
      }
      &-text {
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        margin-left: 10px;
        &-author {
          font-size: 18px;
          font-weight: 900;
          margin-bottom: 0;
        }
        &-published {
          font-size: 12px;
          color: #66686c;
          margin-bottom: 0;
        }
      }
    }
  }
  &-body {
    margin: 12px 0;
    & img {
      width: 100%;
    }
  }
  &-interactions {
    height: 34px;
    margin: 0;
    padding: 4px 0;
    border-top: solid #ced0d4 1px;
    border-bottom: solid #ced0d4 1px;
    color: #6f7175;
    font-weight: 600;
    &-count:hover {
      color: #ea4325;
      font-weight: 900;
      cursor: pointer;
    }
  }
  &-comment {
    margin: 12px 0;
    border-radius: 36px;
    padding: 8px 16px;
    background: #f0f2f5;
    border: none;
  }
}
</style>
