<script>
export default {
  name: 'AppNav',
  props: {
    navItems: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      logo: require('@/assets/logo1.png')
    }
  }
}
</script>

<template>
  <div class="app-nav">
    <nav class="app-nav-items">
      <img :src="logo" class="app-nav--target" ref="logo" />
      <router-link
        v-tooltip.right="item.tooltip"
        :to="item.to"
        v-for="(item, index) in navItems"
        :key="index"
      >
        <v-icon class="app-nav--icon" :name="item.icon" />
      </router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.app-nav {
  position: fixed;
  left: 0;
  height: 100vh;
  z-index: 999;
  padding: 0 1.2rem;
  background-color: rgba(0, 0, 0, 0.1);
  transition: 0.1s;
  backdrop-filter: blur(20px);

  &-items {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 2;
  }

  &--target {
    width: 3.6rem;
    padding-bottom: 2.4rem;
    padding-top: 1rem;
    color: #2f80ed;
    user-select: none;
  }

  &--icon {
    width: 2rem;
  }

  a {
    color: #fff;
    opacity: 0.5;
    padding: 1rem 0;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }

    &.router-link-exact-active {
      opacity: 1;

      .app-nav--icon {
        filter: drop-shadow(0 1px 4px rgba(255, 255, 255, 0.8));
      }
    }
  }
}
</style>
