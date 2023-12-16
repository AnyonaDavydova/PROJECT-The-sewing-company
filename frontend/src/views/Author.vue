<template>
  <div class = "BoxAut">
    <h3>Выберите способ входа</h3>
    <nav id = "playLink">
      <router-link to="/sign-up">Регистрация</router-link>
      <router-link to="/log-in">Вход</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<script setup lang="ts">
</script>
<style>

.BoxAut {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.62);
  height: 40vh;
  width: 80%;
  margin: 10vh auto;
  border-radius: 20px;
}
h3{
  text-transform: uppercase;
  padding-bottom: 20px;
  color: #4258d4;
  font-weight: bolder;
  font-size: 22px;
}
#playLink{
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
#playLink a{
  border-radius: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #4258d4;
  font-size: medium;
  transition: transform .3s;
}
#playLink a:hover{
  transform: scale(1.05);
}

</style>