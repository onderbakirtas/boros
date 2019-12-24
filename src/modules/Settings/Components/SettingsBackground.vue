<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SettingsBackground',
  props: {
    showWindow: Boolean
  },
  data() {
    return {
      selectedBg: null,
      windowHidden: false,
      chosen: false,
      wallpapers: []
    }
  },
  computed: {
    ...mapGetters(['currentWindowPos']),
    viewWindow() {
      return this.showWindow
    }
  },
  methods: {
    ...mapActions(['setBg']),
    closeWindow() {
      console.log('hide')
      this.showWindow = false
    },
    selectBg(n) {
      this.selectedBg = event.target.src
      this.$refs.wp.forEach(el => {
        el.parentElement.classList.remove('selected')
      })
      this.$emit('pick', this.selectedBg)
      this.setBg(this.selectedBg)
      event.target.parentElement.classList.add('selected')
    },
    onDrag(x, y) {
      const activePos = {
        x: x,
        y: y
      }
      this.$store.dispatch('setWindowPos', activePos)
    },
    getWallpapers() {
      const wpList = require.context('@/assets', true, /wp\d\.jpg$/).keys()
      wpList.forEach(el => {
        el = el.replace('./', '')
        this.wallpapers.push(el)
      })
    }
  },
  mounted() {
    this.getWallpapers()
  }
}
</script>

<template>
  <v-window
    drag-handle=".window-header"
    :h="550"
    :w="700"
    :x="currentWindowPos.x"
    :y="currentWindowPos.y"
    :z="currentWindowPos.z"
    :resizable="false"
    @dragstop="onDrag"
  >
    <transition name="scale-fade">
      <div
        class="window window-settings window-settings-background"
        v-if="viewWindow"
      >
        <header class="window-header">Select a backgroud</header>
        <scrollbar maxHeight="42rem">
          <main class="window-main">
            <section class="window-main-grid c2">
              <div
                class="item"
                v-for="n in wallpapers"
                :key="n"
                @click="selectBg(n)"
              >
                <img
                  :src="require(`@/assets/${n}`)"
                  alt=""
                  ref="wp"
                  :class="{ selected: chosen }"
                />
              </div>
            </section>
          </main>
        </scrollbar>
        <footer class="window-footer">
          <button class="btn" @click.prevent="closeWindow">Tamam</button>
        </footer>
      </div>
    </transition>
  </v-window>
</template>

<style lang="scss" scoped>
.vdr {
  border: none;
}
.window {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  height: 100%;
  color: #333;
  overflow: hidden;
  backdrop-filter: blur(40px);
  background: rgba($color: #000000, $alpha: 0.4);
  will-change: backdrop-filter;

  &.hidden {
    display: none;
    transform: scale(1.1);
    transition: 0.2s;
  }

  &-header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 6rem;
    font-size: 2rem;
    line-height: 1;
    font-weight: 300;
    border-bottom: 1px solid rgba($color: #ffffff, $alpha: 0.1);
    color: #fff;
    user-select: none;
    // background: linear-gradient(to top, #ddd, #fff);
  }

  &-main {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;

    &--title {
      display: block;
      text-align: left;
      padding-left: 1rem;
      padding-top: 1rem;
    }

    &-grid {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 2rem;

      &.c2 {
        & > .item {
          &:not(:nth-child(1)),
          &:not(:nth-child(2)) {
            margin-top: 2rem;
          }
          &:nth-child(1),
          &:nth-child(2) {
            margin-top: 0;
          }
          &:nth-child(2n) {
            margin-left: 2rem;
          }
        }
      }

      & > .item {
        border-radius: 0.8rem;
        height: 18rem;
        width: 32rem;
        overflow: hidden;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.9;
        }

        &.selected {
          box-shadow: 0 0 0 2px transparent, 0 0 0 6px #2f80ed;
        }

        & > img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }

  &-footer {
    border-top: 1px solid rgba($color: #ffffff, $alpha: 0.1);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 6rem;
  }
}

.btn {
  border: none;
  border-radius: 0.8rem;
  background: rgba($color: #ffffff, $alpha: 0.3);
  font-family: inherit;
  height: 3.2rem;
  padding: 0 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  outline: none;
  transition: background 0.2s, color 0.1s;
  color: rgba($color: #ffffff, $alpha: 0.7);

  &:hover {
    background: rgba($color: #ffffff, $alpha: 0.5);
    color: #fff;
  }

  &:active {
    color: rgba($color: #000, $alpha: 0.7);
    background: rgba($color: #ffffff, $alpha: 0.3);
  }
}
</style>
