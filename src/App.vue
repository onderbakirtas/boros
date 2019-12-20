<template>
  <div id="app" v-hotkey="keymap" class="app">
    <div class="app-main" :style="`background-image: url('${pickedBg}')`">
      <transition name="slide">
        <AppNav :nav-items="navItems" />
      </transition>
      <div class="app-view">
        <transition name="slide-up">
          <div v-show="showIt" class="app-topbar">
            <input
              type="text"
              class="global-input"
              placeholder="İnternette veya dosyalarınızda arama yapın..."
            />
          </div>
        </transition>
        <transition name="scale-fade">
          <router-view v-show="showIt" />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scrollbar-wrap .scrollbar {
  background: #aaa !important;
  opacity: 0.4 !important;
}
.scrollbar-wrap .scrollbar-y {
  width: 0.8rem !important;
  border-radius: 1rem !important;
  margin-right: 0.2rem !important;
  transition: width 0.2s, opacity 0.2s;

  &:hover {
    width: 1rem !important;
    opacity: 0.7 !important;
  }
}

$font: 'Avenir', Helvetica, Arial, sans-serif;

$font2: 'Nunito Sans', sans-serif;

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  background-size: cover;
  font-family: $font2;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  cursor: default;

  &-main {
    display: flex;
    background: url('~@/assets/wp1.png') no-repeat top left;
    background-size: cover;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    position: relative;
    transition: 0.3s;
  }

  &-topbar {
    padding: 1rem;
  }

  &-view {
    flex-basis: 100%;
    flex-grow: 1;
    flex-shrink: 1;
  }
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f2f2;
  overflow: hidden;
}

.global-input {
  margin: 0;
  width: 100%;
  border: none;
  background: rgba($color: #f2f2f2, $alpha: 0.4);
  border-radius: 3rem;
  height: 3.6rem;
  font-size: 1.4rem;
  font-family: inherit;
  padding: 0.5rem 2rem;
  outline: none;
  box-shadow: 0 2px 12px 3px rgba($color: #333333, $alpha: 0.05);
  transition: 0.1s;
  color: rgba($color: #f2f2f2, $alpha: 0.8);

  &::placeholder {
    color: rgba($color: #f2f2f2, $alpha: 0.8);
  }

  &:focus {
    background: rgba($color: #f2f2f2, $alpha: 0.8);
    box-shadow: 0 2px 12px 3px rgba($color: #333333, $alpha: 0.1);
    color: rgba($color: #000000, $alpha: 0.8);

    &::placeholder {
      color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}

.view {
  max-height: 100vh;
}
.slide-enter-active,
.slide-leave-active {
  transform: translateX(0%);
  transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-up-enter-active,
.slide-up-leave-active {
  transform: translateY(0%);
  transition: transform 0.5s;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100%);
}
.scale-fade-enter-active,
.scale-fade-leave-active {
  opacity: 1;
  transition: opacity 0.5s;
}

.scale-fade-enter,
.scale-fade-leave-to {
  opacity: 0;
}

.tooltip {
  display: block !important;
  z-index: 10000;
  font-family: $font;

  .tooltip-inner {
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    border-radius: 0.5rem;
    padding: 5px 0.8rem 4px;
    font-size: 0.9rem;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 1;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: black;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba(black, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>

<script>
import ColorThief from 'colorthief'
import AppNav from './modules/App/Components/AppNav'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    AppNav
  },
  data() {
    return {
      showIt: true,
      image: require('@/assets/wp1.png'),
      logo: require('@/assets/logo1.png'),
      colorData: null,
      imgTarget: null,
      navItems: [
        {
          to: '/',
          tooltip: 'Home',
          icon: 'home'
        },
        {
          to: '/music',
          tooltip: 'Music',
          icon: 'music'
        },
        {
          to: '/video',
          tooltip: 'Video',
          icon: 'play'
        },
        {
          to: '/startup',
          tooltip: 'Startup',
          icon: 'grid'
        },
        {
          to: '/search',
          tooltip: 'Search',
          icon: 'search'
        },
        {
          to: '/settings',
          tooltip: 'Settings',
          icon: 'settings'
        },
        {
          to: '/add',
          tooltip: 'New Item',
          icon: 'plus'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['pickedBg']),
    keymap() {
      return {
        // 'esc+ctrl' is OK.
        'ctrl+esc': this.toggle,
        'ctrl+shift+f': this.toggle,
        enter: {
          keydown: this.hide,
          keyup: this.show
        }
      }
    },
    newColorData() {
      return this.colorData
    }
  },
  /* async mounted() {
    await this.getColorData()
  }, */
  methods: {
    toggle() {
      this.showIt = !this.showIt
    },
    show() {
      this.showIt = true
    },
    hide() {
      this.showIt = false
    }
    /* async getColorData() {
      const colorSteal = new ColorThief()
      const img = new Image()
      console.log(this.$refs.logo)
      let logoTarget = this.$refs.logo
      img.onload = function(el) {
        this.imgTarget = colorSteal.getColor(logoTarget)
        console.log(this.imgTarget)
        this.colorData = this.imgTarget
        console.log('image loaded')
      }
      img.src = await logoTarget.src
    } */
  }
}
</script>
