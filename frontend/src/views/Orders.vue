<template>
    <div class="MainLayout">
        <h2>Список заказов</h2>
        <OrderInstance
            class="Instance"
            v-for="card of cards"
            v-bind:key="card.number"
            v-bind:card="card"
        />
    </div>
</template>

<script>
import OrderInstance from "@/components/OrderInstance.vue"
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
    name: 'Orders',
    setup() {
        const store = useStore()
        const cards = ref([])

        store.dispatch("getOrders").then((data) => {
            cards.value = data
        })

        return {
            cards
        }
    },
    components: {
        OrderInstance,
    }
}
</script>
