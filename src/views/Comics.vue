<template>
  <div class="comics">
    <div class="list">
      <div class="item" v-for="item in comics" :key="item.id">
        <router-link :to="'/comics/'+item.id"><img class="item-photo" :src="item.thumbnail.path+'.'+item.thumbnail.extension" alt=""></router-link>
        <router-link :to="'/comics/'+item.id"><h4 class="item-title">{{item.name}}{{item.title}}</h4></router-link>
      </div>
    </div>
    <div class="pages">
      <div v-for="index in pages" class="page" :key="index">
        <button @click="changePage(index)" v-if="index < 1" :class="{select: index == page, invisible: index < 1}"> </button>
        <button @click="changePage(index)" v-else :class="{select: index == page}">{{index}}</button>
      </div>
    </div>
    
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import data from '@/res/data/data.json'
import Vue from 'vue'
import { log } from 'util';

export default {
  name: 'comics',
  components: {
    HelloWorld
  },
  watch:{
    'page'(){
      this.pages = [];
      this.arrayPages();
      console.log(this.page);
      
      let pag = this.page*20;

      Vue.axios.get(data.url+"/v1/public/comics?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=20&offset="+pag).then(res => {
        this.comics = res.data;
        this.comics = this.comics.data.results;
      })
    }
  },
  created(){
    this.pages = [];
    this.arrayPages();

    Vue.axios.get(data.url+"/v1/public/comics?ts=1&apikey="+data.publicKey+"&hash="+data.hash+"&limit=20&offset="+this.page).then(res => {
    this.comics = res.data;
    this.total = this.comics.data.total;
    this.comics = this.comics.data.results;
    this.numPag = Math.ceil(this.total/20);
    console.log(this.numPag);
    })
  },
  data(){
    return{
      comics: [],
      total: 0,
      data: data,
      numPag: 0,
      page: 1,
      pages: []
    }
  },
  methods: {
    changePage(index){
      this.page = index;
    },
    arrayPages(){
      for (let i = -2; i <= 2; i++) {
        this.pages.push(this.page+i);
      }
      console.log(this.pages);
      
    }
  }
}
</script>

<style scoped>

.pages{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
}

.list{
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  margin: 20px;
}

.item{
  margin: 20px;
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
  width: 200px;
}



button{
  color: #000000;
  border: none;
  margin: 10px;
  height: 40px;
  width: 40px;
  border-radius: 20px;
}

.select{
  background: #F21826;
  color: #FFFFFF;
}

.invisible{
  visibility: hidden;
}


</style>