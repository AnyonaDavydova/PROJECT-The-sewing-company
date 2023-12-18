<template>
    <div class="MainLayout">
        <h2>Список тканей</h2>
        <ProductInstance
            activeRole="materials"
            v-for="card of cards"
            v-bind:key="card.article"
            v-bind:card="card"
        />
    </div>
</template>

<script>
import ProductInstance from "@/components/ProductInstance.vue"
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
    name: 'Materials',
    setup() {
        const cards = ref([])
        const store = useStore()
        store.dispatch('getClothes').then((data)=> {
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