<script>
import MusicPlayer from './MusicPlayer'

export default {
  name: 'Music',
  data() {
    return {
      onScreen: false
    }
  },
  components: {
    MusicPlayer
  },
  mounted() {
    this.onScreen = true
  }
}
</script>
<template>
  <div class="page music">
    <transition name="fade">
      <MusicPlayer v-if="onScreen" />
    </transition>
  </div>
</template>
