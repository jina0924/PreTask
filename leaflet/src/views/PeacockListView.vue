<template>
  <div>
    <item-list :item_list="peacock_list"></item-list>
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
    ...mapGetters(['peacock_list'])
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