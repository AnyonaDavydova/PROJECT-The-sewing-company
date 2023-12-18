<template>
    <div class="Card">
        <div class="Used">
            <span class="Used__item">Длина: {{ data.length }}</span>
            <span class="Used__item">Ширина: {{ data.width }}</span>
            <span class="Used__item">Стоимость: {{ data.price }}</span>

            <div class="Used__clothes">
                Используемые ткани:
                <router-link
                    class="Used__link"
                    v-for="cloth in data.clothes"
                    v-bind:key="cloth.article"
                    :to="'/nomenclature/materials/'+cloth.article"
                >
                    {{ cloth.name }}
                </router-link>
            </div>
            <div class="Used__access">
                Используемая фурнитура:
                <router-link
                    class="Used__link"
                    v-for="access in data.accessories"
                    v-bind:key="access.article"
                    :to="'/nomenclature/accessories/'+access.article"
                >
                    {{ access.name }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductHistory",
    props: {
        data: {
            type: Object,
            required: true
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .Card {
        padding: 15px 20px;
        border: solid 2px;
        border-radius: 15px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #EEF9FF;
        font-size: toRem(18px);
        margin-left: 5px;
        margin-right: 5px;
        min-width: 70%;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
</style>
