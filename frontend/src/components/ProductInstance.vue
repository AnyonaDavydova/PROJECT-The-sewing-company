<template>
    <div @click="clicked" class="Product">
        <img class="Product__img" :src="card.image" alt="">
        <div class="Product__description">
            <span class="Product__name">{{ card.name }}</span>
            <span class="Product__article">Артикул: {{ card.article }}</span>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from "vue-router";

export default {
    name: "ProductInstance",
    props: {
        card: {
            type: Object,
            required: true
        },
        activeRole: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const store = useStore();
        const router = useRouter();
        props.card.image = store.state.baseStaticURL + props.card.image

        const clicked = () => {
            router.push(props.activeRole+"/"+props.card.article.toString())
        }

        return{
            card: props.card,
            clicked
        }
    }

}
</script>

<style scoped lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .Product {
        display: flex;
        flex-direction: row;
        border: solid 1px;
        border-radius: 10px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        background-color: #EEF9FF;
        transition: box-shadow 0.25s ease-in-out;
        min-width: 70%;
        margin-top: 25px;
        align-items: center;
        margin-left: 10px;
        margin-right: 10px;
        min-height: 160px;

        @include vw-sm-down {
            flex-direction: column;
        }

        &:hover, &:focus {
            box-shadow: 5px 10px 16px 0px rgba(0,0,0,0.5);
        }

        &__img {
            width: 140px;
            padding: 10px;
        }

        &__description {
            display: flex;
            flex-direction: column;
            padding: 20px;

            @include vw-sm-down {
                align-items: center;
            }
        }

        &__name {
            font-size: 2rem;
            margin-bottom: 10px;
            text-align: center;
        }

        &__article {
            color: #949494;
            font-size: 1.25rem;
        }
    }
</style>
