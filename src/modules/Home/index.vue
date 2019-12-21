<script>
import HomeShelf from './Components/HomeShelf'

export default {
  components: {
    HomeShelf
  },
  data() {
    return {
      shelves: false,
      shelfList: [],
      listLenght: 0,
      oldList: [
        {
          id: 1,
          name: 'Favoriler'
        },
        {
          id: 2,
          name: 'Programlarım'
        },
        {
          id: 3,
          name: 'Oyunlarım'
        },
        {
          id: 4,
          name: 'Ivır zıvır'
        }
      ]
    }
  },
  watch: {
    listLenght() {
      if (this.listLenght === 4) clearInterval()
    }
  },
  methods: {
    renderShelves() {
      this.shelves = true
      let i = 0
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i === 4) {
            clearInterval(interval)
          } else {
            this.shelfList.push(this.oldList[i])
          }
          i++
        }, 250)
      }, 100)
      /* const render = () => {
        return setInterval(() => {
          this.oldList.forEach(e => {
            console.log(e)
            this.shelfList.push(e)
          })
        }, 2000)
      } */
    }
  }
  /* mounted() {
    setTimeout(() => {
      this.shelves = true
    }, 2000)
  } */
}
</script>

<template>
  <div class="page home">
    <div>
      <h1>
        <button @click="renderShelves">Show Shelves</button>
      </h1>
    </div>
    <transition-group name="scale-fade2">
      <template v-if="shelves">
        <HomeShelf
          v-for="(shelf, index) in shelfList"
          :key="index"
          :shelf="shelf.name"
        />
      </template>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
.scale-fade2-enter-active,
.scale-fade2-leave-active {
  opacity: 1;
  transform: translateY(0);
  transition: 0.8s;
}

.scale-fade2-enter,
.scale-fade2-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
