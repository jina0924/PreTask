<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list="summer_fruit_list" :page_info="summer_fruit_page"></item-list>
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
    ...mapGetters(['summer_fruit_list', 'summer_fruit_page'])
  },
  methods: {
    ...mapActions(['fetchSummnerFruitList', 'fetchCategoryActive']),
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
      if (this.summer_fruit_page.next) {
        this.fetchSummnerFruitList(this.summer_fruit_page.page + 1)
      }
    }
  },
  created() {
    this.fetchSummnerFruitList(1)
  }
}
</script>

<style scoped>
@import "@/statics/scrollbar.css";
</style>