<template>
    <div class="Card">
        <div class="Used">
            <eva-input v-model="article" @change="changed" placeholder="Артикул"/>
        </div>
       Количество: <eva-input @change="changed" v-model="count" placeholder="Штук"/>
        <br>
    </div>
</template>

<script>
import {ref} from "vue";

export default {
    name: "AccessoryArrival",
    props: {
        'modelValue':{
            type: Object,
            required: true
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const count = ref(null)
        const article = ref(null)
        const changed = () => {
            if (article.value !== '') {
                let data = {}
                data[article.value] = Number.parseInt(count.value)

                if (data[article.value] > 0 && data[article.value] !== undefined && data[article.value] !== null)
                    emit('update:modelValue', data)
            }
        }

        return {
            changed,
            count,
            article
        }
    }
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
