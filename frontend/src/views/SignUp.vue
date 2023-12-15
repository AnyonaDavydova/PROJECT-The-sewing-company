<template>
    <div class="authorize-page">
            <h2>Sign up</h2>
            <form @submit.prevent="submitForm">
              <div class="user-box">
                <label>Username</label>
                <input class="input" type="username" name="username" v-model="username"> <br><br>
              </div>
              <div class="user-box">
                <label>Password</label>
                <input class="input" type="password" name="password" v-model="password">
              </div>
                <button type="submit" id = "signup">Sign up</button>
            </form>

      <label id = "labelOpt" for="role-select">Кто вы?</label>

      <select name="pets" id="role-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
      </select>
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
option{}
#labelOpt{
  margin: 3%;
}
#role-select{
  margin-bottom: 3%;
}
.authorize-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(66, 88, 212);
  height: 50vh;
  width: 70%;
  margin: 10vh auto;
  border-radius: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 2vh;
  color: #ffffff;
}

form {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
}

.user-box{
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
  color: #4258d3;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 20px;
  font-family: Andale Mono, monospace;
}

#signup:hover {
  background-color: #4258d3;
  color: white;
  box-shadow: 0 0 20px white;
}
</style>