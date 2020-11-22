<template>
  <div id="app">
    
         <nav>
        <router-link to ="/">Accueil</router-link>
        <router-link to ="/">intCount</router-link>
      </nav>

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  

}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-color: black;
  height: 133px;
  width:100%;
  text-align: right;
}
nav *{
  padding: 50px;
  display:inline-block;
  line-height: 28px;
  font-size: 24px;
  font-family: Roboto;
  text-decoration: none;
  color:#FFF;
}



</style>

