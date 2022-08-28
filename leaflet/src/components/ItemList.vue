<template>
  <div class="row list-section offset-xl-1 col-xl-10" @scroll="handleItemListScroll">
    <div v-for="item in item_list" :key="item.pk" class="card">
      <div class="row card-inside">
        <div class="item-img col-4">
          <img :src="require(`@/assets/${item.pk % 5}.jpg`)" :alt="`${item.name} 사진`" class="img-fluid">
        </div>
        <div class="item-text col-8">
          <div class="price-group">
            <span v-if="item.discount > 0" class="fixed-price">{{ Number(item.price).toLocaleString('ko-KR') }}</span>
            <span class="discounted-price">{{ Number(item.price - item.discount).toLocaleString('ko-KR') }}</span>
          </div>
          <div class="item-name">{{ item.name }}</div>
          <div class="discount-div">
            <span class="discount-badge">신세계포인트 적립 시 {{ Number(item.discount).toLocaleString('ko-KR') }}원 할인</span>
          </div>
          <div class="row">
            <div class="icon-count col-6">
              <span class="material-symbols-outlined like-icon">heart_plus</span>
              <span>{{ item.like_count }}</span>
            </div>
            <div class="icon-count col-6">
              <span class="material-symbols-outlined comment-icon">mode_comment</span>
              <span>{{ item.comment_count }}</span>
            </div>
          </div>
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
  // data() {
  //   return {
  //     items: this.item_list.slice(0, 10)
  //   }
  // },
  methods: {
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        this.handleLoadMore()
      }
    },
    
    // handleLoadMore() {
    //   if (this.)
    // }
  }
}
</script>

<style scoped>
.list-section {
  display: flex;
  justify-content: center;
}

.card {
  margin: 1rem;
  border-style: none;
  width: 400px;
}

.card-inside {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img {
  width: 110px;
  height: 110px;
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

.item-name {
  font-size: .9rem;
  margin: .2rem 0;
}

.discount-div {
  margin: .1rem 0;
}

.discount-badge {
  border-radius: 3px;
  font-size: .7rem;
  border: thin solid rgb(224, 10, 53);
  color: rgb(224, 10, 53);
  padding: .1rem .2rem;
}

.price-group {
  display: flex;
  align-items: center;
}

.fixed-price {
  font-size: .8rem;
  color: grey;
  margin-right: .5rem;
  text-decoration: line-through;
}

.discounted-price {
  font-weight: 800;
}

.icon-count {
  display: flex;
  align-items: center;
  margin: .5rem 0;
  color: #A6A6A6;
  font-size: .8rem;
  font-weight: 600;
}

.material-symbols-outlined {
  margin-right: .8rem;
  font-size: 1.2rem;
}

.like-icon:hover {
  color: rgb(184, 13, 13);
}

.comment-icon:hover {
  color: rgb(235, 175, 9);
}

</style>