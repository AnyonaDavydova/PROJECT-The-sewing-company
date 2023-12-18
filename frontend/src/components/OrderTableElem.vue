<template>
    <tr>
        <td>
            <router-link :to="'/nomenclature/products/'+product.article">
                {{ product.name }}
            </router-link>
        </td>
        <td>{{ count }}</td>
    </tr>
</template>

<script>
export default {
    name: "OrderTableElem",
    props: {
        product: Object,
        count: Number,
    },
    setup(props) {
        console.log(props.product)
        return {
            product: props.product,
            count: props.count,
        }
    }
}
</script>
