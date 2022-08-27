<template>
  <div>
    <item-list :item_list='item_list'></item-list>
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
    ...mapGetters(['item_list'])
  },
  methods: {
    ...mapActions(['fetchAllList'])
  },
  created() {
    this.fetchAllList()
  }
}
</script>

<style>

</style>