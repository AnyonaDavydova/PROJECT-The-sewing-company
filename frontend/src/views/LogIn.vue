<template>
    <div class="authorize-page">
            <h2>Log in</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Username:</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Password:</label>
                <input class="input" type="password" name="password" v-model="password"> <br><br>
              </div>
                <button type="submit" id = "login">Log in</button>
            </form>
    </div>
</template>

<script>
import axios from 'axios';
import { toHandlerKey } from 'vue';

export default{
    name:'LogIn',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        submitForm(){
            axios
            .defaults.headers.common['Authorization']=''
            localStorage.removeItem("access")

            const formData={
                username: this.username,
                password:this.password
            }
            axios
            .post('/api/v1/jwt/create/',formData)
            .then(response => {
                const access =response.data.access
                const  refresh=response.data.refresh
                this.$store.commit('setAccess',access)
                this.$store.commit('setRefresh',refresh)
                this.$store.commit('setUserName',this.username)
                axios.defaults.headers.common['Authorization'] = "JWT " + access
                localStorage.setItem("access",access)
                localStorage.setItem("refresh",refresh)
                localStorage.setItem("username",this.username)
                this.$router.push("/")
            })
            .catch(error =>{
                console.error(error)
                this.error="Неверный логин или пароль"
            })

        }
    }
}
</script>

<style>

#login {
  margin-top: 0;
  padding: 10px 20px;
  border: none;
  background-color: #ffffff;
  color: #4258d3;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 20px;
  font-family: Andale Mono, monospace;
}

#login:hover {
  background-color: #4258d3;
  color: white;
  box-shadow: 0 0 20px white;
}
</style>