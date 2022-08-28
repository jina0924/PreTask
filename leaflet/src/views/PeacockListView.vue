<template>
  <div>
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
    ...mapActions(['fetchPeacockList'])
  },
  created() {
    this.fetchPeacockList(1)
  }
}
</script>

<style>

</style>