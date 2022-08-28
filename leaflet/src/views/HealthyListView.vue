<template>
  <div>
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
    ...mapActions(['fetchHealthyList'])
  },
  created() {
    this.fetchHealthyList(1)
  }
}
</script>

<style>

</style>