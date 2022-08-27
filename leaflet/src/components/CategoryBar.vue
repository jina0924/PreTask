<template>
  <div class="wrap">
    <ul>
      <router-link :to="{ name: 'home' }"><li>전체</li></router-link>
      <router-link :to="{ name: 'healthy' }"><li>든든하고 건강하게</li></router-link>
      <router-link :to="{ name: 'summerFruit' }"><li>여름과일</li></router-link>
      <router-link :to="{ name: 'peacock' }"><li>피코크</li></router-link>
      <router-link :to="{ name: 'fresh' }"><li>신선식품</li></router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryBar'
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

</style>