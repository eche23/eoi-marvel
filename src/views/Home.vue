<template>
  <div class="home">
    <a href="#/comics/"><h2 class="home-category">Comics</h2></a>
    <ListHome :list="comicsHome"/>
    <a href="#/comics/"><p class="home-more">+more</p></a>
    <a href="#/characters/"><h2 class="home-category">Characters</h2></a>
    <ListHome :list="charactersHome"/>
    <a href="#/characterers"><p class="home-more">+more</p></a>
    <a href="#/series/"><h2 class="home-category">Series</h2></a>
    <ListHome :list="seriesHome"/>
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
    
    Vue.axios.get(data.url+"/v1/public/characters?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=100").then(res => {
      this.characters = res.data;
      this.characters = this.characters.data.results;
      this.charactersHome = this.characters.slice(this.index, this.index+5);
    })
    Vue.axios.get(data.url+"/v1/public/comics?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=100").then(res => {
      this.comics = res.data;
      this.comics = this.comics.data.results;
      this.comicsHome = this.comics.slice(this.index, this.index+5);
      
    })
    Vue.axios.get(data.url+"/v1/public/series?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=100").then(res => {
      this.series = res.data;
      this.series = this.series.data.results;
      this.seriesHome = this.series.slice(this.index, this.index+5);
    })
  },
  data(){
    return {
      comics: [],
      series: [],
      characters: [],
      comicsHome: [],
      charactersHome: [],
      seriesHome: [],
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
