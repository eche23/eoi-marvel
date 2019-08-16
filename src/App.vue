<template>
  <div id="app">
    <div id="nav">
      <a href="#"><img class="logo" src="./res/img/descarga1.png" alt=""></a>
      <div class="nav-list">
        <router-link to="/">Home</router-link>
        <router-link to="/comics/">Comics</router-link>
        <router-link to="/characters/">Characters</router-link>
        <router-link to="/series/">Series</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <div class="option-search">
        <select name="category" id="" class="category">
          <option value="comics">Comics</option>
          <option value="characters">Characters</option>
          <option value="series">Series</option>
        </select>
        <input type="text" class="search" placeholder="Search">

      </div>
      
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
}

html{
  background: #000000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#nav {
  background: #F21826;
  height: 100px;
  display: flex;
  flex: 2;
}

.logo{
  height: 100px;
}

.nav-list{
  display: flex;
  flex: 1;
  margin: auto 10px;
  flex-wrap: wrap;

  
}

#nav a {
  font-weight: bold;
  color: #000000;
  margin: 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FFFFFF;
}

.option-search{
  margin: auto;
  border-radius: 15px;
  display: flex;
  flex: 2;
  justify-content: flex-end;
}

.category{
  color: #FFFFFF;
  background: #000000;
  height: 30px;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px; 
}

.search{
  height: 30px;
  border: none;
  padding: 0;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px; 
}
</style>
