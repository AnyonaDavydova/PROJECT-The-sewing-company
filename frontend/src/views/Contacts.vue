<template>
  <div class="BoxCon">
    <img id = "logoComp" src="../assets/logo.png" alt="Company Logo"/>
    <h4>Швейная фабрика</h4>
    <p><a href="https://360.yandex.ru/mail/">SomeSewingCompany@gmail.com</a></p>
    <p>+7900-000-00-00</p>
  </div>
  <a :href="mapLink" target="_blank" id = "map">Показать на карте</a>

</template>

<script>
export default {
    computed: {
      mapLink() {
        return 'https://maps.google.com/?q=' + encodeURI('Швейная компания ДВФУ');
      },
    }
}
</script>
<style>
#map{
  background-color: white;
  padding: 10px 10% 10px 10%;
  border-radius: 20px;
  color: #4258d3;
}
.BoxCon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 244, 246);
  height: 40vh;
  width: 80%;
  margin: 10vh auto;
  border-radius: 20px;
  border: 50px solid #f2f4f6;
  box-shadow: 0 0 0 10px #4258d4 inset;
  box-sizing: border-box;
  color: #4258d4;
}
#logoComp{
  height: 10vh;
}
p{
  color: #4258d4;
  font-size: medium;
  font-weight: normal;
  margin: 0;
  padding: 2px;
}
h4{
  color: #4258d4;
  font-size: 30px;
  margin:0;
  font-weight: bolder;
}
</style>
