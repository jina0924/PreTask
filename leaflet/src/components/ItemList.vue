<template>
  <div class="col">
    <div v-for="item in item_list" :key="item.pk" class="card">
      <div class="row">
        <div class="item-img col-4">
          <img :src="require(`@/assets/${item.pk % 5}.jpg`)" :alt="`${item.name} 사진`" class="img-fluid">
        </div>
        <div class="item-text col-8">
          <div class="price-group">
            <span class="fixed-price">{{ Number(item.price).toLocaleString('ko-KR') }}</span>
            <span class="discounted-price">{{ Number(item.price - item.discount).toLocaleString('ko-KR') }}</span>
          </div>
          <div>{{ item.name }}</div>
          <div>{{ item.discount }}</div>
          <div>{{ item.comment_set }}</div>
          <div>{{ item.like_set }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemList',
  props: {
    item_list: Array,
  },
}
</script>

<style scoped>
.card {
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  border-style: none;
}

.item-img {
  width: 100px;
  height: 100px;
  position: relative;
  margin-right: 1rem;
}

.item-img img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.price-group {
  display: flex;
  align-items: center;
}

.fixed-price {
  font-size: .8rem;
  color: grey;
  margin-right: 1rem;
}

.discounted-price {
  font-weight: 800;
}

</style>