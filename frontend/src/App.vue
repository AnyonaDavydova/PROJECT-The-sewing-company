<template>
  <nav id = "mainLink">
    <router-link to="/main-page">О нас</router-link>
<!--    <router-link to="/constructor">О нас</router-link>-->
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

h1{
  margin-top: 5vh;
  text-transform: uppercase;
  font-size: 30px;
  letter-spacing: 10px;
  line-height: 1.2vh;
  text-shadow: 4px 4px 0 rgba(14, 4, 80, 0.37);
}

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
  background:  #4258d5;
  font-size: large;
  text-decoration: none;
  border-radius: 10px;
  padding: 10px;
  margin-left: 1rem;
  transition: transform .3s;
}
nav a:hover{
  transform: scale(1.05);

}

nav a.router-link-exact-active {
  color: #4258d4;
    background: linear-gradient(#ffffff, #dbdcff);

}
</style>
