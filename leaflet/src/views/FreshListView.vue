<template>
  <div>
    <item-list :item_list="fresh_list"></item-list>
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
    ...mapGetters(['fresh_list'])
  },
  methods: {
    ...mapActions(['fetchFreshList'])
  },
  created() {
    this.fetchFreshList()
  }
}
</script>

<style>

</style>