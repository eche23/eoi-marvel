<template>
  <div class="item-home">
    <a href="#"><img class="item-photo" src="../res/img/marvel.jpg" alt=""></a>
    <a href=""><h3 class="item-title">TITLE</h3></a>
  </div>
</template>

<script>
export default {
  name: 'ItemHome',
  props: {
    msg: String
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
}

.item-photo{
    display: flex;
    flex: 1;
    height: 280px;
    width: 200px;

}

</style>
