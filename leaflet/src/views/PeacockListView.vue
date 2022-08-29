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
  data() {
    return {
      preScroll: 0
    }
  },
  computed: {
    ...mapGetters(['peacock_list', 'peacock_page'])
  },
  methods: {
    ...mapActions(['fetchPeacockList', 'fetchCategoryActive']),
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      if (this.preScroll < scrollTop) {
        this.fetchCategoryActive(false)
        this.preScroll = scrollTop
      } else if (this.preScroll > scrollTop) {
        this.fetchCategoryActive(true)
        this.preScroll = scrollTop
      }
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
@import "@/statics/scrollbar.css";
</style>