<template>
  <div>
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
    ...mapActions(['fetchAllList'])
  },
  created() {
    this.fetchAllList(1)
  }
}
</script>

<style>

</style>