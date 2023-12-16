<template>
    <div class="authorize-page">
            <h2>Регистрация</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Почта</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Пароль</label>
                <input class="input" type="password" name="password" v-model="password">
              </div>

              <div class="user-box">
                <label id = "labelOpt" for="role-select">Кто вы?</label>
                <select name="roles" id="role-select">
                  <option value="">Please choose an option</option>
                  <option value="zakaz">Заказчик</option>
                  <option value="mened">Менеджер</option>
                  <option value="dir">Дирекция</option>
                  <option value="klad">Кладовщик</option>
                </select>
              </div>
                <button type="submit" id = "signup">Создать аккаунт</button>
            </form>


    </div>
</template>

<script >
import axios from 'axios';

export default{
    name:'SignUp',
    data(){
        return {
            username: '',
            password: '',
        }
    },
    methods:{
        submitForm(){
            const formData= {
                username: this.username,
                password:this.password,
            }
            axios
            .post('/api/v1/users/',formData)
            .then(response => {
                console.log(response)
                this.$router.push('/log-in')
            })
            .catch(error =>{
                console.log(error)
            })
            
        }
        
    }
}   
</script>

<style>
#labelOpt{
  margin-top: 2vh;
}
#role-select{
  margin-bottom: 0;
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  color: rgb(219, 166, 172);
  font-family: Andale Mono, monospace;
  font-weight: bold;
}
.authorize-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(220, 167, 173);
  height: 60vh;
  width: 70%;
  margin: 10vh auto;
  border-radius: 20px;
  padding: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 3vh;
  color: #ffffff;
  font-weight: bolder;
}

form {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}

.user-box{
  margin: 0 0;
  display: grid;
  justify-content: center;
}

.input {
  font-size: 15px;
  padding: 10px;
  border:none;
  border-radius: 20px;
  width: 300px;
}

label {
  position: relative;
  color: #ffffff;
  pointer-events: none;
}


#signup {
  margin-top: 4vh;
  padding: 10px 20px;
  border: none;
  background-color: #ffffff;
  color: #dca7ad;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 20px;
  font-family: Andale Mono, monospace;
}

</style>