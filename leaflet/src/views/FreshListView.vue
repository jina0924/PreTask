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
  data() {
    return {
      preScroll: 0
    }
  },
  computed: {
    ...mapGetters(['fresh_list', 'fresh_page'])
  },
  methods: {
    ...mapActions(['fetchFreshList', 'fetchCategoryActive']),
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
      if (this.fresh_page.next) {
        this.fetchFreshList(this.fresh_page.page + 1)
      }
    }
  },
  created() {
    this.fetchFreshList(1)
  }
}
</script>

<style scoped>
@import "@/statics/scrollbar.css";
</style>