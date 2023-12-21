<template>
    <div v-if="!is_loading" class="MainLayout">
        <div class="ItemDetails">
            <img class="ItemDetails__img" :src="baseStaticURL+data.accessory.image" alt="">
            <table class="ItemDetails__table">
                <thead>
                    <tr>
                        <td>Наименование</td>
                        <td>Артикул</td>
                        <td>Тип</td>
                        <td>Длина</td>
                        <td>Ширина</td>
                        <td>Вес</td>
                        <td>Количество, шт</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ data.accessory.name }}</td>
                        <td>{{ data.accessory.article }}</td>
                        <td>{{ data.accessory.type }}</td>
                        <td>{{ data.accessory.length }}</td>
                        <td>{{ data.accessory.width }}</td>
                        <td>{{ data.accessory.weight }}</td>
                        <td>{{ data.amount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="Decommission">
            <eva-input placeholder="Списать" status="warning" v-model="count" required type="number"/>
            <div class="Decommission__buttonGroup">
                <button class="Decommission__button Button" type="button" @click="onDecommision">Списать, шт</button>
                <button v-if="data.accessory.kg_acceptable == true" class="Decommission__button Button" type="button" @click="onDecommisionInKg">Списать, кг</button>
            </div>
        </div>
    </div>
    <div v-else>Загрузка ...</div>
</template>

<script>

import { useStore } from "vuex";
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "AccessoriesDetail",
    setup(props) {
        const store = useStore()
        const data = ref({})
        const count = ref(null)
        const router = useRoute()
        const is_loading = ref(true)
        store.dispatch("getAccessoryDetails", router.params.id).then((data_) => {
            console.log(data_);
            data.value = data_;
            is_loading.value = false;
        })

        const onDecommision = () => {
            store.dispatch("accessoryDecommission", {article:data.value.article, count:count.value})
            .then(()=>{
                data.value.amount -= count.value
            }).catch((err) => {
                console.log(err)
            })
        }
        const onDecommisionInKg = () => {
            store.dispatch("accessoryDecommissionInKg", {article:data.value.article, count:count.value})
            .then(()=>{
                data.value.amount -= parseInt(count.value / data.value.accessory.weight)
            }).catch((err) => {
                console.log(err)
            })
        }

        return {
            data,
            count,
            onDecommision,
            onDecommisionInKg,
            baseStaticURL: store.state.baseStaticURL,
            is_loading
        }
    }
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .DetailsLayout {
        display: flex;
        flex-direction: column;
    }
    
    .ItemDetails {
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;

        @include vw-sm-down {
            flex-direction: column;
        }

        &__table {
            display: flex;
            flex-direction: row;
            font-size: toRem(20px);
            padding-left: 5px;
            padding-right: 5px;
            text-overflow: ellipsis;
            
            // @include vw-xs-down {
            //     width: 320px;
            // }

            tr {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
            }

            td {
                border: solid black 1px;
                padding: 10px;
                word-break: break-all;
            }
        }

        &__img {
            display: block;
            max-width: 200px;
            height: auto;
            object-fit: scale-down;
            margin-right: 30px;

            @include vw-sm-down {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }

    .Decommission {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;

        &__buttonGroup {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 20px;
        }

        &__button {
            margin-left: 10px;
            margin-right: 10px;
        }
    }
</style>
