<template>
  <div class="container">
    <h1>Добавить изображение</h1>
    <input type="file" @change="onFileChange">
    <input type="text" v-model="imageName" placeholder="Введите название изображения">
    <button @click="addImage">Добавить</button>

    <div class="images-container">
      <div v-for="(image, index) in images" :key="index" class="image">
        <img :src="image.src" :alt="image.name">
        <p>{{ image.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageName: '',
      file: null,
      images: []
    };
  },

  methods: {
    onFileChange(event) {
      this.file = event.target.files[0]; // Получаем выбранный файл
    },

    addImage() {
      if (this.file && this.imageName) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const src = event.target.result;
          // Создаем объект с информацией о добавленном изображении
          const image = {
            src,
            name: this.imageName
          };
          this.images.push(image);
          this.imageName = '';
          this.file = null;
        }
        reader.readAsDataURL(this.file); // Читаем файл как base64 изображение
      }
    }
  }
};
</script>

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
}

.image {
  width: 25%;
  padding: 10px;
  box-sizing: border-box;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image p {
  text-align: center;
}
</style>
