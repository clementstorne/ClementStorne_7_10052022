<template>
  <div class="alert-block" v-if="revealAlert">
    <div class="alert-block-overlay" @click="toggleAlert"></div>
    <div class="alert-block-card card">
      <div class="alert-block-btn btn" @click="toggleAlert">✖️</div>
      <p class="alert-block-text">
        {{ messageAlert }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBlock",
  props: {
    revealAlert: Boolean,
    toggleAlert: Function,
    messageAlert: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.alert-block {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  &-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &-card {
    padding: 60px 50px 30px;
    border-left: 8px solid $color-primary;
    width: 70%;
    border-radius: 8px;
  }
  &-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 8px;
  }
  &-text {
    text-align: center;
  }
}
</style>
