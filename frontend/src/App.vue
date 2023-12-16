<template>
  <nav id = "mainLink">
    <router-link to="/main-page">О нас</router-link>
    <router-link to="/authorization">Авторизация</router-link>
    <router-link to = "/gallery">Галерея</router-link>
    <router-link to="/contacts">Контакты</router-link>
  </nav>
  <router-view/>

</template>

<script>


import axios from 'axios';

 export default{
  name:'App',
  beforeCreate(){
    this.$store.commit('initializeStore')

    const access = this.$store.state.access

    if(access){
      axios.defaults.headers.common['Authorization'] = "JWT "+ access
    }else{
      axios.defaults.headers.common['Authorization'] = ''
    }
  }
 }

</script>

<style>

#app {
  font-family: Andale Mono, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#mainLink{
  grid-template-columns: 180px 180px 180px 180px;
}

nav {
  margin-top: -4vh;
  padding: 10px;
  display: grid;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  background: #dea8ae;
  font-size: large;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 1rem;
  transition: transform .3s;
  box-shadow: 0 5px 1px #816363;
}
nav a:hover{
  transform: scale(1.05);

}

nav a.router-link-exact-active {
  color: #dc9292;
  background: white;
}
</style>
