<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'MusicPlayer',
  computed: {
    ...mapGetters(['mpWinPos'])
  },
  methods: {
    ...mapActions(['setMpPos']),
    dragWindow(x, y) {
      console.log(x, y)
      let pos = {
        x: x,
        y: y,
        z: 999
      }
      console.log(this.mpWinPos)
      console.log(pos)
      this.setMpPos(pos)
      console.log(this.mpWinPos)
    }
  }
}
</script>

<template>
  <v-window
    drag-handle=".window-header"
    :x="mpWinPos.x"
    :y="mpWinPos.y"
    :z="mpWinPos.z"
    :resizable="false"
    @dragstop="dragWindow"
  >
    <div class="window mplayer">
      <header class="window-header">Music Player</header>
      <main class="window-main mplayer-main">
        <div class="mplayer-cover">
          Cover Art
        </div>
        <div class="mplayer-list">
          Playlist
        </div>
      </main>
      <footer class="window-footer mplayer-footer">
        Controls
      </footer>
    </div>
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
  color: #fff;
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
.mplayer {
  width: 72rem;
  height: 50rem;

  &-main {
    display: flex;
  }

  &-cover {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 40rem;
  }

  &-list {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 20rem;
  }
}
</style>
