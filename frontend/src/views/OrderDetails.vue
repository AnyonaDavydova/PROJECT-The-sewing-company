<template>
    <div class="MainLayout">
        <div class="OrderDetails">
            <h2 class="OrderDetails__text">Заказ {{order.id}}</h2>
            <span class="OrderDetails__text">Дата создания: {{order.creation_date}}</span>
            <span class="OrderDetails__text">Дата завершения: {{order.completion_date}}</span>
            <span class="OrderDetails__text">Статус: {{order.stage}}</span>
            <span class="OrderDetails__text">Менеджер: {{order.manager.name}}</span>
            <span class="OrderDetails__text">Покупатель: {{order.customer.name}}</span>
            <span class="OrderDetails__text">Сумма заказа: {{order.cost}}</span>
        </div>
        <table class="OrderTable">
            <thead>
                <tr>
                    <td>Товар</td>
                    <td>Количество</td>
                </tr>
            </thead>
            <tbody>
                <TableElem
                    v-for="elem in data"
                    :key="elem.product.article"
                    :product="elem.product"
                    :count="elem.count"
                />
            </tbody>
        </table>
        <h3>Карты раскроя для заказа</h3>
        <template v-for="mapping in mappings">
            <a target="_blank" :href="'http://localhost:9000/'+mapping.map">{{ mapping.article }}: {{mapping.batch_number}}</a>
        </template>
    </div>
</template>

<script>
import TableElem from "@/components/OrderTableElem.vue"
import { useStore } from 'vuex';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "OrderDetails",
    components: {
        TableElem,
    },
    setup() {
        const order = ref({})
        const data = ref([])
        const store = useStore()
        const route = useRoute()
        const mappings = ref([])

        store.dispatch("getOrderInfo", route.params.id).then((data) => {
            order.value = data
        })

        store.dispatch("getOrderProducts", route.params.id).then((data_) => {
            console.log(data_)
            data.value = data_
        })

        store.dispatch("getMappings", route.params.id).then((data_) => {
            mappings.value = data_
        })

        return {
            order,
            data,
            mappings
        }

    },
}
</script>

<style lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
.OrderDetails {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
    line-height: 1.5;

    &__text {
        font-size: toRem(20px);
        margin-bottom: 10px;
    }
}

.OrderTable {
    padding-left: 5px;
    padding-right: 5px;

    td {
        font-size: toRem(20px);
        border: solid black 1px;
        padding: 15px;
        word-break: break-all;
    }
}
</style>
