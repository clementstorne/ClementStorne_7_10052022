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
              {{ user }}
            </p>
            <p class="post-header-informations-text-published">
              Publié le {{ date }} à {{ time }}
            </p>
          </div>
        </div>
        <div class="post-header-parameters">⚙️</div>
      </div>
      <div class="post-parameters"></div>
    </div>
    <div class="post-body">
      <p class="text-start">
        {{ content }}
      </p>
      <img :src="mediaUrl" alt="" />
    </div>
    <div class="post-interactions row">
      <div class="post-interactions-like col-6 text-center">
        <p class="post-interactions-count">👍 {{ likes }}</p>
      </div>
      <div class="post-interactions-comment col-6 text-center">
        <p class="post-interactions-count">👎 {{ dislikes }}</p>
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
  props: {
    user: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mediaUrl: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
    dislikes: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped lang="scss">
.post {
  background: $white;
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
          color: $color-primary;
          &:hover {
            color: darken($color-primary, 5%);
            cursor: pointer;
          }
        }
        &-published {
          font-size: 12px;
          color: $dark-gray;
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
    border-top: solid $medium-gray 1px;
    border-bottom: solid $medium-gray 1px;
    color: $dark-gray;
    font-weight: 600;
    &-count:hover {
      color: $color-primary;
      font-weight: 900;
      cursor: pointer;
    }
  }
  &-comment {
    margin: 12px 0;
    border-radius: 18px;
    padding: 8px 16px;
    background: $gray;
    border: none;
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
      outline: none;
    }
  }
}
</style>
