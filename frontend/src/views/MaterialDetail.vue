<template>
    <div class="MainLayout">
        <div class="ItemDetails">
            <img class="ItemDetails__img" :src="baseStaticURL+data.image" alt="">
            <table class="ItemDetails__table">
                <thead>
                    <tr>
                        <td>Артикул</td>
                        <td>Наименование</td>
                        <td>Цвет</td>
                        <td>Принт</td>
                        <td>Ширина</td>
                        <td>Цена за метр</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ data.article }}</td>
                        <td>{{ data.name }}</td>
                        <td>{{ data.color }}</td>
                        <td>{{ data.print }}</td>
                        <td>{{ data.width }}</td>
                        <td>{{ data.price }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2 class="Rolls_title">Рулоны</h2>
        <div class="Rolls">
            <span v-show="rolls.length === 0" class="Rolls_nothing">Нет в наличии</span>
            <Roll
                v-for="roll in rolls"
                v-bind:key="roll.number"
                v-bind:item="roll"
            />
        </div>
    </div>
</template>

<script>
import Roll from "@/components/Roll.vue"
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import {ref} from "vue";

export default {
    name: "MaterialDetail",
    components: {
        Roll,
    },
    setup() {
        const store = useStore()
        const route = useRoute()
        const rolls = ref( [] )
        const data = ref({})

        store.dispatch("getClothById", route.params.id)
            .then((data_)=>{
                console.log(data_)
                data.value =data_
            })

        store.dispatch("getClothDetails", route.params.id).then((data)=>{
            console.log(data)
            rolls.value = data
        })

        return {
            rolls,
            data,
            baseStaticURL: store.state.baseStaticURL
        }
    },
}
</script>

<style scoped lang="scss">
    $marginLeft: 50px;

    .Rolls {
        margin-bottom: 35px;

        &_title {
            margin-left: $marginLeft;
        }

        &_nothing {
            font-size: 1.25rem;
            color: gray;
            font-style: italic;
            margin-left: $marginLeft;
        }
    }
</style>
