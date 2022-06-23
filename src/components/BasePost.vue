<template>
  <div class="post container my-4">
    <div class="col-12">
      <div class="post-header">
        <div class="post-header-informations">
          <div class="post-header-informations-profile-picture">
            <img :src="imageUrl" alt="Photo de profil de l'utilisateur" />
          </div>
          <div class="post-header-informations-text">
            <p class="post-header-informations-text-author">
              {{ username(firstname, lastname) }}
            </p>
            <p class="post-header-informations-text-published">
              Publié le {{ dateFormat(createdAt) }} à
              {{ timeFormat(createdAt) }}
            </p>
          </div>
        </div>
        <div class="post-header-parameters">
          <span
            class="post-header-parameters-edit"
            @click.prevent="editPost"
            v-if="isAllowed"
            >🖊</span
          >
          <span
            class="post-header-parameters-delete"
            @click.prevent="deletePost"
            v-if="isAllowed"
            >🗑</span
          >
        </div>
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
        <p class="post-interactions-count" @click.prevent="addLike">
          👍 {{ likes }}
        </p>
      </div>
      <div class="post-interactions-comment col-6 text-center">
        <p class="post-interactions-count" @click.prevent="addDislike">
          👎 {{ dislikes }}
        </p>
      </div>
    </div>
    <!-- <input
      type="text"
      placeholder="Écrivez un commentaire"
      class="post-comment col-12"
    /> -->
  </div>
</template>

<script>
import { UsersService } from "@/services/UsersService";
import { PostsService } from "@/services/PostsService";
import { LikesService } from "@/services/LikesService";
import { DislikesService } from "@/services/DislikesService";
export default {
  name: "BasePost",
  data() {
    return {
      user: {
        id: null,
        firstname: "",
        lastname: "",
        email: "",
        imageUrl: "",
      },
      isAllowed: false,
    };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    userId: {
      type: Number,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
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
  beforeMount() {
    UsersService.getUserData()
      .then((res) => {
        this.user = res.data.data;
        this.isAuthor();
      })
      .catch((err) => console.log(err));
    console.log(this.user.id);
  },
  methods: {
    isAuthor() {
      if (this.userId === this.user.id) {
        this.isAllowed = true;
      }
    },
    dateFormat: (date) => {
      return date.split("T")[0].split("-").reverse().join("/");
    },
    timeFormat: (time) => {
      return time.split("T")[1].split(":").slice(0, 2).join(":");
    },
    username: (firstname, lastname) => {
      return firstname + " " + lastname;
    },
    async addLike() {
      try {
        const credentials = {
          PostId: this.id,
        };
        console.log(credentials);
        await LikesService.addLike(credentials);
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
    async addDislike() {
      try {
        const credentials = {
          PostId: this.id,
        };
        await DislikesService.addDislike(credentials);
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
    async editPost() {
      try {
        const credentials = {
          content: "Contenu modifié",
        };
        const postId = this.id;
        await PostsService.editPost(postId, credentials);
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
    },
    async deletePost() {
      try {
        const postId = this.id;
        await PostsService.deletePost(postId);
        this.$router.go();
      } catch (err) {
        console.log(err);
      }
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
        object-fit: cover;
        border-radius: 50%;
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
    &-parameters {
      &-edit {
        margin-right: 20px;
        cursor: pointer;
      }
      &-delete {
        cursor: pointer;
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
    // border-bottom: solid $medium-gray 1px;
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
