<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list="fresh_list" :page_info="fresh_page"></item-list>
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
    ...mapGetters(['fresh_list', 'fresh_page'])
  },
  methods: {
    ...mapActions(['fetchFreshList']),
    handleItemListScroll(event) {

      const { scrollHeight, scrollTop, clientHeight } = event.target
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      if (this.fresh_page.next) {
        this.fetchFreshList(this.fresh_page.page + 1)
      }
    }
  },
  // watch: {
  //   fresh_list() {
  //     this.fresh_list
  //   }
  // },
  created() {
    this.fetchFreshList(1)
  }
}
</script>

<style scoped>
.item-list {
  height: calc(100vh - 50px);
  overflow: auto;
}
</style>