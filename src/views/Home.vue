<template>
  <div class="home">
    <a href="#/comics/"><h2 class="home-category">Comics</h2></a>
    <ListHome/>
    <a href="#/comics/"><p class="home-more">+more</p></a>
    <a href="#/characters/"><h2 class="home-category">Characters</h2></a>
    <ListHome/>
    <a href="#/characterers"><p class="home-more">+more</p></a>
    <a href="#/series/"><h2 class="home-category">Series</h2></a>
    <ListHome/>
    <a href="#/series/"><p class="home-more">+more</p></a>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListHome from '@/components/ListHome.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListHome
  }
}
</script>

<style scoped>

.home{
  margin: 20px;
}

a{
  text-decoration: none;
}

.home-category{
  color: #FFFFFF;
  text-align: left;
}

.home-more{
  color: #FFFFFF;
  text-align: right;
}



</style>
