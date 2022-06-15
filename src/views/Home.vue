<template>
  <div class="home">
    <TheHeader />
    <div class="mx-2">
      <ThePostSharer />
      <BasePost
        v-for="post in posts"
        :key="post.id"
        :user="post.user"
        :date="post.date"
        :time="post.time"
        :content="post.content"
        :media-url="post.mediaUrl"
        :likes="post.likes"
        :comments="post.comments"
      ></BasePost>
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BasePost from "@/components/BasePost.vue";
import ThePostSharer from "../components/ThePostSharer.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    BasePost,
    ThePostSharer,
  },
  data: function () {
    return {
      posts: [
        {
          id: 1,
          user: "Utilisateur 1",
          date: "18/05/2022",
          time: "08:20",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, numquam!",
          mediaUrl:
            "https://images.unsplash.com/photo-1653491888857-6cb8c8f0264c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          likes: 3,
          comments: 5,
        },
        {
          id: 2,
          user: "Utilisateur 2",
          date: "13/05/2022",
          time: "11:43",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, numquam!",
          mediaUrl:
            "https://images.unsplash.com/photo-1653562970548-1b7cb5f3e589?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          likes: 77,
          comments: 25,
        },
        {
          id: 2,
          user: "Utilisateur 3",
          date: "08/05/2022",
          time: "14:41",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, numquam!",
          mediaUrl:
            "https://images.unsplash.com/photo-1653491889685-d68145b5abd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
          likes: 2,
          comments: 43,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  background: #f0f2f5;
  padding-bottom: 10px;
}
</style>
