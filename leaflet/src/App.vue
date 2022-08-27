<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="info-message">금주의 전단 상품을 만나보세요</div>
    <category-bar></category-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CategoryBar from '@/components/CategoryBar.vue'

export default {
  name: 'App',
  components: { NavBar, CategoryBar },
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
</style>
