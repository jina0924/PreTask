<template>
  <div @scroll="handleItemListScroll" class="item-list">
    <item-list :item_list='all_list' :page_info='all_page'></item-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from  'vuex'
import ItemList from '@/components/ItemList.vue'

export default {
  name: 'HomeView',
  components: {
    ItemList,
  },
  computed: {
    ...mapGetters(['all_list', 'all_page'])
  },
  methods: {
    ...mapActions(['fetchAllList']),
    handleItemListScroll(event) {
      const { scrollHeight, scrollTop, clientHeight } = event.target
      const isBottom = scrollHeight === scrollTop + clientHeight
      if (isBottom) {
        setTimeout(() => this.handleLoadMore(), 1000)
      }
    },
    handleLoadMore() {
      if (this.all_page.next) {
        this.fetchAllList(this.all_page.page + 1)
      }
    }
  },
  created() {
    this.fetchAllList(1)
  }
}
</script>

<style scoped>
@import "@/statics/scrollbar.css";
</style>