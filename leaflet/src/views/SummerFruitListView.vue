<template>
  <div>
    <item-list :item_list="summer_fruit_list"></item-list>
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
    ...mapGetters(['summer_fruit_list'])
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