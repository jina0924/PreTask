<template>
  <nav class="navbar navbar-expand-lg px-3">
    <div class="link-icon-group">
      <a class="navbar-back" href="#">
        <span class="material-symbols-outlined">west</span>
      </a>
      <router-link :to="{ name: 'home' }" class="home-btn">
        <span class="material-symbols-outlined">home</span>
      </router-link>
    </div>
    <div class="navbar-title">금주의 전단광고</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-item-group" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">홈</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">추석</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">자주구매</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">오반장</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.link-icon-group {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-back{
  color: black;
  text-decoration: none;
  margin-right: 1rem;
}

.home-btn {
  color: black;
}

.navbar-title {
  font-weight: 500;
}

.navbar-toggler {
  border-style: none;
}

.navbar-expand-lg {
  justify-content: space-between;
}

.navbar-collapse {
  flex-grow: unset;
}
</style>