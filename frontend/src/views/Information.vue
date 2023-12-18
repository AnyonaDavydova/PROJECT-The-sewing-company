<template>
  <div class="BoxCon">
    <img id = "logoComp" src="../assets/iconLOGO/logo-03.jpg" alt="Company Logo"/>
     <a :href="mapLink" target="_blank" id = "map">
       Показать на карте
     </a>
  </div>

  <div class = "BoxMain">
    <section id="section1" >
      Это время суток имеет особую магию. Именно оно предопределяет течение последующего за ним дня. Здесь важно всё – наше настроение, мысли, идеи. И непременно нужно найти возможность побыть наедине с собой, немного помечтать, поискать ответы на давно волнующие вопросы или просто насладиться тишиной.
      <br>
      <img src ="../assets/images/image-01.jpg" id="imageI" alt="image01">
      <br>
      Наш бренд ассоциируется с новым началом, этапом, энергией нового дня. Мы хотим, чтобы каждый новый день наших клиентов ассоциировался с новыми возможностями, а для этого очень важно правильно его начать. С хорошего настроения, улыбки, бодрящего душа, любимого чая или кружки ароматного кофе, минутки наедине с собой, с собственного отражения в зеркале. Важно нравится себе, важно, чтобы было комфортно и ничто не отвлекало от достижения поставленных целей и радости открытий. Важно верить в себя, свои силы и возможности. И текстиль вокруг Вас играет в этом не последнюю роль.
      <br>
      <img src ="../assets/images/image-03.jpg" id="imageI" alt="image02">
      <br>
      Мы акцентируем внимание на чистых цветах, не перегруженных лишними элементами, используем натуральные, приятные на ощупь ткани, избирательно подходим к вопросу кроя, в котором стараемся избегать обыденности. Ведь каждый день мы разные и это выражается в швейной продукции.
      Отправные точки: натуральные ткани, чистые цвета, минимализм в деталях, интересный крой, поиск новых форм, радость открытий, возможность самовыражения без отрыва от мира и природы, гармония, ценность настоящего с уверенным взглядом в будущее.
      <br>
      <img src ="../assets/images/image-02.jpg" id="imageI" alt="image03">
    </section>
  </div>
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
#imageI{
  border-radius: 10px;
  display: block;
  margin: 4vh auto;
  height: 60vh;
  max-width: 100vh;

  @include vw-md-down {
    margin: 4vh auto;
    height: 60vh;
    max-width: 100%;

  }

}
#map{
  margin-top: 3vh;
  margin-bottom: 0;
  background-color: #fdfdfd;
  padding: 0 10% 0 10%;
  border-radius: 20px;
  color: #5c5e5f;
  text-decoration: none;
}
.BoxCon{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  padding: 5px;
  width: 80%;
  margin: 5vh auto;
  border-radius: 20px;
  border: 50px solid white;
  background: white;
  box-shadow: 0 0 0 10px #626262 inset;
  box-sizing: border-box;
}
#logoComp{
  height: 12vh;
}
a{
  color: #5c5e5f;
  font-weight: lighter;
}
section {
  padding-left: 80px;
  padding-right: 80px;
  text-align: justify;
  font-weight: lighter;
  line-height: 1.5;
  letter-spacing: 2px;
}
</style>
