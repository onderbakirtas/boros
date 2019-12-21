<script>
export default {
  name: 'HomeShelf',
  props: {
    shelf: String
  }
}
</script>

<template>
  <section class="shelf">
    <header class="shelf-header">{{ shelf }}</header>
  </section>
</template>

<style lang="scss" scoped>
.shelf {
  min-height: 30rem;
  background: rgba($color: #000000, $alpha: 0.2);
  backdrop-filter: blur(30px);
  border-radius: 1rem;

  & + & {
    margin-top: 3rem;
  }

  &-header {
    text-align: left;
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba($color: #fff, $alpha: 0.1);
    user-select: none;
  }
}
</style>
