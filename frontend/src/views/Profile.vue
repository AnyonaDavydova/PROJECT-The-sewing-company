<template>
    <div class="MainLayout">
        <div class="ProfileCard">
            <span class="ProfileCard_name">{{ userdata.name }}</span>
            <span>Тип аккаунта: {{ userdata.role }}</span>
            <button class="ProfileCard_button Button" type="button" @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { ref } from 'vue';

export default {
    setup() {
        const userdata = ref({})
        const store = useStore()
        const router = useRouter()

        store.dispatch('getProfile').then((data)=> {
            data.role = ({
                "1": "Заказчик",
                "2": "Менеджер",
                "3": "Кладовщик",
                "4": "Швея",
                "5": "Директор"
            })[data.role.toString()]
            userdata.value = data
        })

        return {
            userdata,
            logout: ()=>{
                store.commit.bind(null, 'setToken', '')
                router.push("/")
            }
        }

    },
}
</script>

<style scoped lang="scss">
@import "@/styles/media.scss";
@import "@/styles/variables.scss";
    .ProfileCard {
        display: flex;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        padding: 5px;
        font-size: toRem(25px);

        &_name {
            margin-bottom: 20px;
            text-align: center;
        }

        &_button {
            margin-top: 20px;
        }
    }
</style>
