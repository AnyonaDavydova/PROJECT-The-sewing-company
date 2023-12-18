<template>
<div class="MainLayout">
    <h1>Создать накладную и учесть материалы</h1>
    <h2 v-if="success">Успешно создана</h2>
    <h2 v-if="error">Возникла ошибка, проверьте артикул</h2>
    <template v-for="(ca, index) in clothes">
        <ClothArrival v-model="clothes[index]"/>
    </template>
    <template v-for="(ca, index) in accessories">
        <AccessoryArrival v-model="accessories[index]"/>
    </template>

    <button class="Button" @click="createCloth">Добавить ткань</button><button class="Button" @click="deleteCloth">-</button>
    <br><br>
    <button class="Button" @click="createAccessory">Добавить фурнитуру</button><button class="Button" @click="deleteAccessory">-</button>
    <br><br><br><br>
    <button class="Button" @click="finishHim">Создать накладную и учесть товар</button>
    <a v-if="link !== null" target="_blank" :href="'https://sewing.mrfox131.software/'+link">Ссылка на накладную</a>

</div>
</template>

<script>
import ClothArrival from '@/components/ClothArrival'
import {reactive, ref, watch} from "vue";
import AccessoryArrival from "@/components/AccessoryArrival";
import { useStore } from 'vuex';

export default {
    name: "MaterialsArrival",
    components: {
        ClothArrival,
        AccessoryArrival
    },
    setup() {
        const clothes = reactive([{}])
        const accessories = reactive([{}])
        const store = useStore()
        const link = ref(null)

        const createCloth = () => {
            clothes.push({})
        }

        const deleteCloth = () => {
            clothes.splice(clothes.length - 1, 1)
        }

        const createAccessory = () => {
            accessories.push({})
        }

        const deleteAccessory = () => {
            accessories.splice(accessories.length - 1, 1)
        }

        const finishHim = () => {
            let payload = {"accessories": {},
            "clothes": {}}
            clothes.forEach((elem) => {
                payload["clothes"] = {
                    ...payload["clothes"],
                    ...elem
                }
            })
            accessories.forEach((elem) => {
                payload["accessories"] = {
                    ...payload["accessories"],
                    ...elem
                }
            })
            let formdata = new FormData()

            payload["accessories"] = JSON.stringify(payload["accessories"])
            payload["clothes"] = JSON.stringify(payload["clothes"])
            formdata.set("accessories", payload["accessories"])
            formdata.set("clothes",  payload["clothes"])
            store.dispatch('goodsArrival', formdata ).then((data) => {
                link.value = data[0]
            })
        }
        return {
            clothes,
            createCloth,
            deleteCloth,
            accessories,
            createAccessory,
            deleteAccessory,
            finishHim,
            link
        }
    }
}
</script>

<style scoped>

</style>
