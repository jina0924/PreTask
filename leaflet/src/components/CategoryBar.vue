<template>
  <div class="wrap">
    <ul>
      <router-link :to="{ name: 'home' }"><li :class="[isAll ? 'active' : 'non-active']">전체</li></router-link>
      <router-link :to="{ name: 'healthy' }"><li :class="[isHealthy ? 'active' : 'non-active']">든든하고 건강하게</li></router-link>
      <router-link :to="{ name: 'summerFruit' }"><li :class="[isSummerFruit ? 'active' : 'non-active']">여름과일</li></router-link>
      <router-link :to="{ name: 'peacock' }"><li :class="[isPeacock ? 'active' : 'non-active']">피코크</li></router-link>
      <router-link :to="{ name: 'fresh' }"><li :class="[isFresh ? 'active' : 'non-active']">신선식품</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryBar',
  computed: {
    isAll() {
      return this.$route.name === 'home'
    },
    isHealthy() {
      return this.$route.name === 'healthy'
    },
    isSummerFruit() {
      return this.$route.name === 'summerFruit'
    },
    isPeacock() {
      return this.$route.name === 'peacock'
    },
    isFresh() {
      return this.$route.name === 'fresh'
    }
  }
}
</script>

<style scoped>
.wrap {
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */ 
  scrollbar-width: none; /* Firefox */
  margin-top: 1rem;
}
.wrap::-webkit-scrollbar {
  display: none;
}

ul {
  padding-left: 1rem;
}

li {
  display:inline-block;
  margin-right: 1.5rem;
  color: black;
}

.active {
  font-weight: 800;
}

.non-active {
  font-weight: 400;
}
</style>