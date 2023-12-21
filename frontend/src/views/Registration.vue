<template>
  <div class="Registration">
    <div class="Login_layout">
      <h1 class="Login_title">Вход</h1>

      <div class="Login_form form__group field">
        <eva-input class="form__field"
                   placeholder="Логин"
                   name="login"
                   id='login'
                   required
                   v-model="login"/>
      </div>
              <eva-input class="form__field"
                   placeholder="Иванов Иван"
                   name="name"
                   id='name'
                   required
                   v-model="full_name"/>
      <div class="form__group field">
        <eva-input type="password"
                   class="form__field"
                   placeholder="Пароль"
                   name="pass"
                   id='pass'
                   required
                   v-model="password"/>
        <eva-input type="password_2"
                   class="form__field"
                   placeholder="Введите пароль ещё раз"
                   name="pass2"
                   id='pass2'
                   required
                   v-model="password_2"/>
      </div>

      <button
          class="Login_button Button"
          type="button"
          @click="onRegistration"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

export default {
  name: "Registration",
  setup() {
    const login = ref('')
    const password = ref('')
    const password_2 = ref('')
    const full_name = ref('')
    const store = useStore()
    const router = useRouter()

    const onRegistration = function () {
      store.dispatch("registration", {
        login: login.value, password: password.value, name:full_name.value, role: 5
      }).then(() => {
        console.log("registered")
        router.push("/log-in");
      })
    }

    const buttonActive = computed(
        () => { return password_2 === password },
    )

    return {
      login,
      password,
      password_2,
      full_name,
      onRegistration,
      buttonActive
    }
  }
}
</script>

<style scoped lang="scss">
.Registration {
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
