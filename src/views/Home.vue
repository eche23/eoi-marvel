<template>
  <div class="home">
    <a href="#/comics/"><h2 class="home-category">Comics</h2></a>
    <ListHome :list="comics"/>
    <a href="#/comics/"><p class="home-more">+more</p></a>
    <a href="#/characters/"><h2 class="home-category">Characters</h2></a>
    <ListHome :list="characters"/>
    <a href="#/characters"><p class="home-more">+more</p></a>
    <a href="#/series/"><h2 class="home-category">Series</h2></a>
    <ListHome :list="series"/>
    <a href="#/series/"><p class="home-more">+more</p></a>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import ListHome from '@/components/ListHome.vue'
import data from '@/res/data/data.json'
import Vue from 'vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    ListHome
  },
  props:{

  },
  created(){
    this.index = parseInt(Math.random()*100);
    console.log(this.index);
    
    Vue.axios.get(data.url+"/v1/public/characters?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=5&offset="+this.index).then(res => {
      this.characters = res.data;
      this.characters = this.characters.data.results;
    })
    Vue.axios.get(data.url+"/v1/public/comics?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=5&offset="+this.index).then(res => {
      this.comics = res.data;
      this.comics = this.comics.data.results;
      
    })
    Vue.axios.get(data.url+"/v1/public/series?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=5&offset="+this.index).then(res => {
      this.series = res.data;
      this.series = this.series.data.results;
    })
  },
  data(){
    return {
      comics: [],
      series: [],
      characters: [],
      data: data,
      index: 0
    }
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
