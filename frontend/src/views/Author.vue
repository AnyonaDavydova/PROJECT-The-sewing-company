<template>
  <div class = "BoxAut">
    <h3>Выберите способ входа</h3>
    <nav id = "playLink">
      <router-link to="/sign-up"
                   @mouseover="showSU = true"
                   @mouseleave="showSU = false">Регистрация
      </router-link>
      <div class= "SU" v-show="showSU">
        Для новых пользователей
      </div>
      <router-link to="/log-in"
                   @mouseover="showLI = true"
                   @mouseleave="showLI = false">Вход
      </router-link>
      <div class="LI" v-show="showLI">
        Для уже зарегистированных пользователей
      </div>
    </nav>
    <router-view/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showSU: false,
      showLI: false
    };
  }
};
</script>
<style>

.BoxAut {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 70vh;
  width: 80vh;
  margin: 10vh auto;
  border-radius: 20px;
}
h3{
  text-transform: uppercase;
  padding-bottom: 20px;
  color: #5a5b5d;
  font-weight: bolder;
  font-size: 22px;
}
#playLink{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
  align-items: center;
}
#playLink a{
  border-radius: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #dea8ae;
  font-size: medium;
  transition: transform .3s;
  padding: 8px 20px;
}
#playLink a:hover{
  transform: scale(1.05);
}
.SU {
  color: #4d5056;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 15vh;
  margin-left: 6vh;
  border-radius: 5px;
  transform: translateX(-50%);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.LI{
  white-space: normal;
  color: #4d5056;
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20vh;
  margin-left: 40vh;
  border-radius: 5px;
  transform: translateX(-50%);
  width: 30vh;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

</style>