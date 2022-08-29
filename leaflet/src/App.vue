<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="info-message">금주의 전단 상품을 만나보세요</div>
    <category-bar v-if="is_category_active"></category-bar>
    <div v-if="!is_category_active" class="scroll-down"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CategoryBar from '@/components/CategoryBar.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: { NavBar, CategoryBar },
  computed: {
    ...mapGetters(['is_category_active'])
  }
}
</script>

<style>
#app {
  font-family: 'SUIT';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.info-message {
  font-weight: 500;
  margin-left: 1rem;
  margin-top: 1rem;
}

.scroll-down {
  height: 2rem;
}
</style>
