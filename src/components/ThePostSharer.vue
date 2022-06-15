<template>
  <div class="posting container my-4">
    <div class="col-12">
      <div
        class="posting-top d-flex flex-column align-items-center flex-md-row justify-content-start align-items-md-start py-3"
      >
        <div class="posting-top-profile-picture mb-2">
          <img
            src="@/assets/user-profile-picture.png"
            alt="Photo de profil de l'utilisateur"
          />
        </div>
        <textarea
          class="posting-top-message"
          placeholder="Quoi de neuf, Utilisateur ?"
          style="height: 100px"
          id="post_content"
          v-model="post.content"
        ></textarea>
      </div>
      <div
        class="posting-bottom row d-flex flex-column align-items-between flex-md-row justify-content-start align-items-md-start py-2"
      >
        <div class="posting-bottom-picture col-12 col-md-6 d-grid mb-2 p-0">
          <button class="btn btn-secondary mx-1">📷 Partager une photo</button>
        </div>
        <div class="posting-bottom-btn col-12 col-md-6 d-grid mb-2 p-0">
          <button class="btn btn-primary mx-1" @click.prevent="createNewPost">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PostsService } from "@/services/PostsService";
export default {
  name: "ThePostSharer",
  data() {
    return {
      post: {
        user_id: 3,
        content: "",
      },
    };
  },
  methods: {
    async createNewPost() {
      try {
        const credentials = {
          user_id: this.post.user_id,
          content: this.post.content,
        };
        await PostsService.createPost(credentials);
        this.$router.push("/home");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.posting {
  background: $white;
  border-radius: 9px;
  &-top {
    &-profile-picture {
      & img {
        width: 40px;
        height: 40px;
      }
    }
    &-message {
      margin-left: 12px;
      border-radius: 16px;
      padding: 8px 16px;
      background: $gray;
      border: none;
      resize: none;
      width: 100%;
      &:focus {
        box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
        outline: none;
      }
    }
  }
  &-bottom {
    color: $dark-gray;
    font-weight: 600;
    align-items: center;
    margin: 0;
    &-picture:hover {
      color: $color-primary;
      font-weight: 900;
      cursor: pointer;
    }
    & p {
      margin-bottom: 0;
    }
  }
}
.btn {
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  &-primary {
    background: $color-primary;
    &:hover {
      background: darken($color-primary, 5%);
    }
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba($color-primary, 0.5);
      outline: none;
    }
  }
  &-secondary {
    background: $color-tertiary;
    &:hover {
      background: darken($color-tertiary, 5%);
    }
    &:focus {
      box-shadow: 0px 0px 0px 4px rgba($color-tertiary, 0.5);
      outline: none;
    }
  }
}
</style>
