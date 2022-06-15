<template>
  <div id="profile">
    <TheHeader />
    <div class="p-4">
      <TheProfileModifier />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheProfileModifier from "@/components/TheProfileModifier.vue";
export default {
  name: "ProfileView",
  components: {
    TheHeader,
    TheProfileModifier,
  },
};
</script>

<style scoped lang="scss">
#profile {
  // height: 100vh;
  background: #f0f2f5;
  padding-bottom: 10px;
}
</style>
