<template>
  <div class="home">
    <div class="mx-2">
      <ThePostSharer @new-post-added="publishPost" />
      <BasePost
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :userId="post.userId"
        :firstname="post.User.firstname"
        :lastname="post.User.lastname"
        :createdAt="post.createdAt"
        :imageUrl="post.User.imageUrl"
        :content="post.content"
        :media-url="post.mediaUrl"
        :likes="post.Likes.length"
        :users-who-liked="post.Likes"
        :dislikes="post.Dislikes.length"
        :users-who-disliked="post.Dislikes"
      ></BasePost>
    </div>
  </div>
</template>

<script>
import BasePost from "@/components/BasePost.vue";
import ThePostSharer from "../components/ThePostSharer.vue";

import { PostsService } from "@/services/PostsService";

export default {
  name: "HomeView",
  components: {
    BasePost,
    ThePostSharer,
  },
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    PostsService.getAllPosts()
      .then((res) => {
        this.posts = res.data.data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    publishPost(data) {
      console.log(data);
    },
    usersWhoLiked() {
      for (let post of this.posts) {
        console.log(post.Likes);
        post.Likes = post.Likes.map((item) => item.dataValues.UserId);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  background: #f0f2f5;
  margin-top: 72px;
  padding: 10px 0;
}
</style>
