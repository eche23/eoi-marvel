<template>
  <div class="list-home">
    <div class="" v-for="item in list" :key="item.id">
      <ItemHome :item="item" class="item"/>
    </div>
  </div>
</template>



<script>

import ItemHome from '@/components/ItemHome.vue'

export default {
  name: 'ListHome',
  props: {
    msg: String,
    list: Array
  },
  components: {
    ItemHome
  },
  beforeMount(){
    this.len = this.list.length
    
  },
  data(){
    return {
      homeList: [],
      len: 0
    }
  },
  methods:{

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list-home{
  height: 350px;
  display: flex;
  justify-content: space-evenly;
  border: #F21826 solid;
  border-radius: 5px;
}


</style>
