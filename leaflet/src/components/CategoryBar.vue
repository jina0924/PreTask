<template>
  <div class="wrap">
    <ul>
      <li :class="[isAll ? 'active' : 'non-active']"><router-link :to="{ name: 'home' }" class="category-tab">전체</router-link></li>
      <li :class="[isHealthy ? 'active' : 'non-active']"><router-link :to="{ name: 'healthy' }" class="category-tab">든든하고 건강하게</router-link></li>
      <li :class="[isSummerFruit ? 'active' : 'non-active']"><router-link :to="{ name: 'summerFruit' }" class="category-tab">여름과일</router-link></li>
      <li :class="[isPeacock ? 'active' : 'non-active']"><router-link :to="{ name: 'peacock' }" class="category-tab">피코크</router-link></li>
      <li :class="[isFresh ? 'active' : 'non-active']"><router-link :to="{ name: 'fresh' }" class="category-tab">신선식품</router-link></li>
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

ul {
  padding-left: 1rem;
  display: flex;
  width: 98%;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */ 
  scrollbar-width: none; /* Firefox */
  margin-top: 1rem;
}
ul::-webkit-scrollbar {
  display: none;
}

li {
  /* display:inline-block; */
  margin-right: 1.5rem;
  /* -webkit-box-flex: 1; */
  flex-grow: 1;
  text-align: center;
  list-style: none;
}

.category-tab {
  text-decoration: none;
  color: black;
}

.active {
  font-weight: 800;
}

.non-active {
  font-weight: 400;
}
</style>