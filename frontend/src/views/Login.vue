<template>
    <div class="Login">
        <div class="Login_layout">
            <h1 class="Login_title">Вход</h1>

            <div class="Login_form form__group field">
                <eva-input class="form__field" placeholder="Логин" name="login" id='login' required v-model="login"/>
            </div>

            <div class="form__group field">
                <eva-input type="password" class="form__field" placeholder="Пароль" name="pass" id='pass' required v-model="password"/>
            </div>

            <button class="Login_button Button" type="button" @click="onLogin">Войти</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    name: "Login",
    setup() {
        const login = ref('')
        const password = ref('')
        const store = useStore()
        const router = useRouter()

        const onLogin = function() {
            store.dispatch("login", {login: login.value, password: password.value}).then(() => {
                console.log("logined")
                router.push("/nomenclature/products");
            })
        }

        return {
            login,
            password,
            onLogin
        }
    }
}
</script>

<style scoped lang="scss">
    .Login {
        align-self: center;
        width: 30vw;

        &_layout {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
        }

        &_button {
            min-width: 100%;
            margin-top: 35px;
        }

        &_form {
            margin-top: 10px;
            margin-bottom: 30px;
        }
    }
</style>
