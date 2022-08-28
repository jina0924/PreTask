<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list="peacock_list" :page_info="peacock_page"></item-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'HealthyListView',
  components: {
    ItemList
  },
  computed: {
    ...mapGetters(['peacock_list', 'peacock_page'])
  },
  methods: {
    ...mapActions(['fetchPeacockList']),
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      if (this.peacock_page.next) {
        this.fetchPeacockList(this.peacock_page.page + 1)
      }
    }
  },
  created() {
    this.fetchPeacockList(1)
  }
}
</script>

<style scoped>
.item-list {
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>