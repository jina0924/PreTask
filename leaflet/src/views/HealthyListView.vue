<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list="healthy_list" :page_info="healthy_page"></item-list>
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
    ...mapGetters(['healthy_list', 'healthy_page'])
  },
  methods: {
    ...mapActions(['fetchHealthyList']),
    handleItemListScroll(event) {
      console.log(event)
      const { scrollHeight, scrollTop, clientHeight } = event.target
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      if (this.healthy_page.next) {
        this.fetchHealthyList(this.healthy_page.page + 1)
      }
    }
  },
  created() {
    this.fetchHealthyList(1)
  }
}
</script>

<style scoped>
.item-list {
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>