<template>
  <div class="home">
    <TheHeader />
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
      :dislikes="post.dislikes"
      :comments="post.comments"
    ></BasePost>
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
          mediaUrl: "https://media.giphy.com/media/WEBiysleGJC6Y/giphy.gif",
          likes: 3,
          dislikes: 4,
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
            "https://images.unsplash.com/photo-1652894449003-11e4228e9ae7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
          likes: 77,
          dislikes: 1,
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
            "https://media.giphy.com/media/lRpD28vbtrqq2zpaKS/giphy.gif",
          likes: 2,
          dislikes: 13,
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
