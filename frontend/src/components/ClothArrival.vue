<template>
    <div class="Card">
        <div class="Used">
            <eva-input v-model="article" @change="changed" placeholder="Ариткул"/>
            <p>Список рулонов</p>
        </div>
        <template v-for="(i, index) in rolls">
            Длина рулона №{{index+1}}: <eva-input @change="changed" v-model="rolls[index].value" placeholder="Длина"/>
            <button v-if="index != 0" class="Button" @click="removeByIndex.bind(this, index)()">-</button>
            <br>
        </template>
        <button class="Button" @click="AddNewOne">+</button>
    </div>
</template>

<script>
import {ref, watch} from "vue";

export default {
    name: "ClothArrival",
    props: {
        'modelValue':{
            type: Object,
                required: true
        },
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const article = ref()
        const rolls = ref([ref(null),ref(null)])
        const removeByIndex = (index) => {
            rolls.value.splice(index, 1)
        }

        const AddNewOne = () => {
            rolls.value.push(ref(null))
        }

        const changed = () => {
            if (article.value !== '') {
                let data = {}
                data[article.value] = []
                rolls.value.forEach((elem) => {
                    if (elem.value !== 0 && elem.value !== undefined && elem.value !== null)
                        data[article.value].push(Number.parseFloat(elem.value))
                })
                console.log(data)
                if (data[article.value].length > 0)
                    emit('update:modelValue', data)
            }
        }

        return {
            article,
            rolls,
            removeByIndex,
            AddNewOne,
            changed
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
