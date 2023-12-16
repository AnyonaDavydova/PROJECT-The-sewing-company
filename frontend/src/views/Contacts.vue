<template>
  <div class="BoxCon">
    <img id = "logoComp" src="../assets/designSite/logo-03.jpg" alt="Company Logo"/>
    <p>+7900-000-00-00</p>
    <p><a href="https://vk.com/utroclothes">Связаться с нами в VK</a></p>
  </div>
  <a :href="mapLink" target="_blank" id = "map">Показать на карте</a>

</template>

<script>
export default {
    computed: {
      mapLink() {
        return 'https://maps.google.com/?q=' + encodeURI('Швейная компания утро');
      },
    }
}
</script>
<style>
#map{
  background-color: #fdfdfd;
  padding: 10px 10% 10px 10%;
  border-radius: 20px;
  color: #5c5e5f;
}
.BoxCon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  width: 80%;
  margin: 10vh auto;
  border-radius: 20px;
  border: 50px solid white;
  background: white;
  box-shadow: 0 0 0 10px #dca7ad inset;
  box-sizing: border-box;
}
#logoComp{
  height: 12vh;
}
p{
  color: #5c5e5f;
  font-size: medium;
  font-weight: normal;
  margin: 0;
  padding: 2px;
}
a{
  color: #5c5e5f;
}
</style>
