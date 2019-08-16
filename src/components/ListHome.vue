<template>
  <div class="list-home">
    <ItemHome/>
    <ItemHome/>
    <ItemHome/>
    <ItemHome/>
    <ItemHome/>
  </div>
</template>



<script>

import ItemHome from '@/components/ItemHome.vue'

export default {
  name: 'ListHome',
  props: {
    msg: String
  },
  components: {
    ItemHome
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.list-home{
  height: 350px;
  display: flex;
  justify-content: space-around;
  border: #F21826 solid;
  border-radius: 5px;
}

</style>
