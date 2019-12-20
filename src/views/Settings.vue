<script>
import SettingsBackground from '../modules/Settings/Components/SettingsBackground'

export default {
  name: 'Settings',
  components: {
    SettingsBackground
  },
  data() {
    return {
      showWindow: false
    }
  },
  methods: {
    showBgWindow() {
      this.showWindow = !this.showWindow
    }
  }
}
</script>

<template>
  <div class="settings">
    <button class="btn" @click="showBgWindow">Set Background</button>
    <SettingsBackground :show-window="showWindow" />
  </div>
</template>
