<template>
  <div class="MainLayout">
    <h1>Добавить продукт</h1>
    <h2 v-if="success">Успешно создана</h2>
    <h2 v-if="error">Возникла ошибка, проверьте артикул</h2>

    <form class="AddForm" @submit="onSubmit">
      <div class="AddForm__group AddForm__group_horizontal">
        <span class="AddForm__title">Можно измерять в кг?</span>
        <input class="AddForm__input" name="image" v-model="kg" type="checkbox"/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Артикул</span>
        <eva-input class="AddForm__input" placeholder="Артикул" status="warning" v-model="article" required
                   type="number"/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Название</span>
        <eva-input class="AddForm__input" placeholder="Название" status="warning" v-model="name" required/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Длина</span>
        <eva-input class="AddForm__input" placeholder="Длина" status="warning" v-model="length" required/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Ширина</span>
        <eva-input class="AddForm__input" placeholder="Ширина" status="warning" v-model="width" required type="number"/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Принт</span>
        <eva-input class="AddForm__input" placeholder="Принт" status="warning" v-model="print" required/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Вес</span>
        <eva-input class="AddForm__input" placeholder="Вес" status="warning" v-model="weight" required/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Тип</span>
        <eva-input class="AddForm__input" placeholder="Тип аксесуара" status="warning" v-model="type" required/>
      </div>
      <div class="AddForm__group">
        <span class="AddForm__title">Цена</span>
        <eva-input class="AddForm__input" placeholder="Цена" status="warning" v-model="price" required type="number"/>
      </div>
      <div class="AddForm__group AddForm__group_horizontal">
        <span class="AddForm__title">Фото</span>
        <input class="AddForm__input" id="photo" placeholder="Фото" name="image" required type="file"/>
      </div>

      <button class="AddForm__button Button" type="submit">Создать</button>
    </form>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {ref} from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: "AddProduct",
  setup() {
    const name = ref('')
    const price = ref(null)
    const weight = ref(null)
    const width = ref(null)
    const length = ref(null)
    const type = ref('')
    const article = ref(null)
    const store = useStore()
    const error = ref(false)
    const success = ref(false)
    const kg = ref(false)
    const update = ref(false)
    const router = useRouter()

    let onSubmit = e => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', name.value)
      formData.append('price', price.value)
      formData.append('weight', weight.value)
      formData.append('length', length.value)
      formData.append('type', type.value)
      formData.append('article', article.value)
      formData.append('width', width.value)
      formData.append('length', length.value)
      formData.append('kg_acceptable', kg.value)
      formData.append('image', document.getElementById('photo').files[0])
      formData.append('update', update.value)
      router.push("/nomenclature/products");
      store.dispatch("createNewProduct", formData)
          .then((data) => {
            error.value = false
            success.value = true
          }).catch(() => {
        error.value = true
        success.value = false
      })
    }

    return {
      onSubmit,
      name,
      price,
      weight,
      width,
      length,
      type,
      article,
      error,
      success,
      kg,
      update
    }
  }
}
</script>