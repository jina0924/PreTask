<template>
  <div>
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
  computed: {
    ...mapGetters(['summer_fruit_list', 'summer_fruit_page'])
  },
  methods: {
    ...mapActions(['fetchSummnerFruitList'])
  },
  created() {
    this.fetchSummnerFruitList(1)
  }
}
</script>

<style>

</style>