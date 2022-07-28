<template>
  <div id="profile">
    <div class="p-4">
      <TheProfileUpdate />
    </div>
  </div>
</template>

<script>
import TheProfileUpdate from "@/components/TheProfileUpdate.vue";
export default {
  name: "ProfileView",
  components: {
    TheProfileUpdate,
  },
};
</script>

<style scoped lang="scss">
#profile {
  height: calc(100vh - 91.2px);
  background: #f0f2f5;
  margin-top: 72px;
  padding: 10px 0;
}
</style>
