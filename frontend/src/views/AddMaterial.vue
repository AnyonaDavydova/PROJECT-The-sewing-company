<template>
    <div class="MainLayout">
        <h1>Добавить ткань</h1>
        <h2 v-if="success">Успешно создана</h2>
        <h2 v-if="error">Возникла ошибка, проверьте артикул</h2>
        
        <form class="AddForm" @submit="onSubmit">
            <div class="AddForm__group">
                <span class="AddForm__title">Артикул</span>
                <eva-input class="AddForm__input" placeholder="Артикул" status="warning" v-model="article" required type="number"/>
            </div>
            <div class="AddForm__group">
                <span class="AddForm__title">Название</span>
                <eva-input class="AddForm__input" placeholder="Название" status="warning" v-model="name" required/>
            </div>
            <div class="AddForm__group">
                <span class="AddForm__title">Цвет</span>
                <eva-input class="AddForm__input" placeholder="Цвет" status="warning" v-model="color" required/>
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
                <span class="AddForm__title">Состав</span>
                <eva-input class="AddForm__input" placeholder="Состав" status="warning" v-model="composition" required/>
            </div>
            <div class="AddForm__group">
                <span class="AddForm__title">Цена</span>
                <eva-input class="AddForm__input" placeholder="Цена" status="warning" v-model="price" required type="number"/>
            </div>
            <div class="AddForm__group AddForm__group_horizontal">
                <span class="AddForm__title">Фото</span>
                <input class="AddForm__input" id="photo" placeholder="Фото" name="image" required  type="file"/>
            </div>

            <button class="AddForm__button Button" type="submit">Создать</button>
        </form>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: "AddMaterial",
    setup() {
        const article = ref(null)
        const name = ref('')
        const price = ref(null)
        const composition = ref('')
        const width = ref(null)
        const print = ref('')
        const color = ref('')
        const router = useRouter()
        const store = useStore()
        const error = ref(false)
        const success = ref(false)
        const update = ref(false)

        let onSubmit = e => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('name', name.value)
            formData.append('price', price.value)
            formData.append('composition', composition.value)
            formData.append('color', color.value)
            formData.append('print', print.value)
            formData.append('article', article.value)
            formData.append('width', width.value)
            formData.append('image', document.getElementById('photo').files[0])
            formData.append('update', update.value)
            router.push("/nomenclature/materials");
            store.dispatch("createNewMaterial", formData)
            .then((data) => {
                error.value = false
                success.value = true
            }).catch(() => {
                error.value = true
                success.value = false
            })
        }

        return {
            name,
            price,
            composition,
            width,
            print,
            color,
            article,
            error,
            success,
            update,
            onSubmit
        }
    }
}
</script>
