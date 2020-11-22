<template>
  <div id="acc">
      <div class="body">
        <img src="../assets/intCountLogo.png" id="logo">
        <img src="../assets/img.png" id="imagep1">
        <form @submit.prevent="login">
          <input type="text" placeholder="Numero de Telephone" v-model="username" ><br/>
          <input type="password" placeholder="Mot de passe" v-model="password" ><br/>
          <input type="submit" value="Login" >
        </form>

      </div>
  </div>
</template>

<script>
import axios from 'axios';
window.axios= require('axios');
export default {
    name: 'Acc',
    data () {
      return{
            username: '',
            password: '',
      }
    },
    methods: {
      login: function()
              {
              axios.post('http://localhost:2403/users/login',{
                username: this.username,
                  password: this.password
                }).then(response=>{
                  const token=response.data.id;
                  localStorage.setItem('token',token);
                  this.$router.push({name: 'Data'})
                  });
                  }
              }        

  }

</script>

<style lang="scss">
* {
  margin-top: 0px;
}


#logo {
  position:absolute;
  width: 127px;
  height: 126px;
  top: 154px;
  left: calc(50% - 127px/2 + 11.5px);
  bottom: 417px;
  
}
#imagep1 {
  position: absolute;
  width: 343px;
  height: 370px;
  right: 15%;
  top: 234px;

}

form {
  position: absolute;
  left: 158px;
  top: 280px;
}

form input[type=text] , form input[type=password] {
  width: 345px;
  height: 69px;
  background: #E5E5E5;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  margin: 25px;
}

::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color:black;
}
form input[type=submit] {
  border: none;
  background: #FFF;
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  cursor: pointer;
}
@media screen and (max-width: 1178px) {
  #logo {
    top:100px;
  }
  #imagep1 {
    top: 500px;
    left: calc(50% - 343px/2 + 15px);
  }
 form {
  left: calc(50% - 370px/2);
  top:220px;
  }
  nav {
  height: 80px;
  text-align: center;
  }
  nav a{
  line-height: 5px;
  font-size: 2 vw;
  }
}
</style>
