<template>
  <div class="home">
    <TheHeader />
    <ThePostSharer />
    <BasePost />
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
};
</script>

<style scoped lang="scss">
.home {
  background: #f0f2f5;
  padding-bottom: 10px;
}
</style>
