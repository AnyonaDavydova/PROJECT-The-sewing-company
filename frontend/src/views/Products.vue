<template>
    <div class="MainLayout">
        <h2>Список выпускаемой продукции</h2>
        <ProductInstance
            activeRole="products"
            v-for="card of cards"
            v-bind:key="card.article"
            v-bind:card="card"
        />
    </div>
</template>

<script>
import ProductInstance from "@/components/ProductInstance.vue"
import { ref } from "vue";
import { useStore } from "vuex";

export default {
    name: 'Products',
    setup() {
        const cards = ref([])
        const store = useStore()
        store.dispatch('getProducts').then((data)=> {
            cards.value = data
        })
        return {
            cards
        }

    },
    components: {
        ProductInstance,
    }
}
</script>

