<template>
    <div class="Roll">
        <span class="Roll_num">Номер: {{ item.number }}</span>
        <span class="Roll_num">Длина: {{ item.length }}</span>
        <div class="Cancel">
            <div class="form__group field">
                <input class="form__field" placeholder="Количество" :name="item.number" :id='item.number' type="number" required v-model="length"/>
                <label :for="item.number" class="form__label">Количество</label>
            </div>
            <button class="Cancel_button Button" type="button" @click="onDecommission">Списать</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';
export default {
    name: "Roll",
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const item = ref(props.item);
        const store = useStore()
        const length= ref (0)
        const onDecommission = () => {
            store.dispatch("clothDecommission", {article: props.item.article, number: props.item.number, length: length.value})
            .then(()=>{
                item.value.length -= length.value
            })
        }
        return {
            item,
            onDecommission,
            length
        }

    }
}
</script>

<style lang="scss" scoped>
.Roll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-left: 50px;
    padding-right: 30px;
    align-items: center;
}

.Cancel {
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 10px;
        margin-bottom: 10px;

        &_button {
            margin-left: 20px;
        }
    }
</style>
