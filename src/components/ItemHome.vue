<template>
  <div class="item-home">
    <router-link :to="'/comics/'+item.id"><img class="item-photo" :src="item.thumbnail.path+'.'+item.thumbnail.extension" alt=""></router-link>
    <router-link :to="'/comics/'+item.id"><h4 class="item-title">{{item.name}}{{item.title}}</h4></router-link>
  </div>
</template>

<script>
export default {
  name: 'ItemHome',
  props: {
    msg: String,
    item: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-home{
    display: flex;
    flex: 1;
    margin: 10px;
    flex-direction: column;
    align-items: center;
    
}

a{
    text-decoration: none;
}

.item-title{
    color: #FFFFFF;
    display: flex;
    flex: 1;
    max-width: 200px;
    
}

.item-photo{
    display: flex;
    flex: 1;
    height: 250px;
    max-width: 200px;

}

</style>
