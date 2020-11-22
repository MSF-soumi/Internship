
<template>
    <div >
         <img  src="../assets/intCountLogo.png" id="log">
         <img v-show="show==''" src="../assets/img.png" id="image">
         <div v-for="item in data" :key="item">
             <h1 @click="show=item.id">{{ item.ClientName }}</h1>
             <div v-show="show==item.id" class="container">
                 <div>
                     <label for="date">Date:</label>
                    <span id="date">{{item.date}}</span><br>
                 </div>
                 <div>
                      <label for="solde">Solde:</label>
                    <span id="solde">{{item.solde}}</span>
                    <label for="paiement">Paiement chèque:</label>
                    <span id="paiement">{{item.paiement}}</span>
                 </div>
                 <div>
                    <label for="TVA">TVA:</label>
                    <span id="TVA">{{item.TVA}}</span>
                    <label for="SInitial">Stock initial:</label>
                    <span id="SInitial">{{item.StockInitial}}</span>
                    <label for="SFinal">Stock final:</label>
                    <span id="SFinal">{{item.StockFinal}}</span>
                 </div>
                    
                   
                    
            </div>
         </div>
    </div>
</template>

<script>
import axios from 'axios';
window.axios= require('axios');

export default { 
    name:'Data',
    data () {
      return{
            data: [],
            show: '',
      }
    },
    mounted : function() {
        if(localStorage.getItem('token')){
            axios
            .get('http://localhost:2403/data')
            .then(response => {this.data = response.data});
            
        }else{
            alert('You are not logged in',this.$router.push({name: 'Acc'}));
        }
        
    },
     destroyed:function(){
         localStorage.removeItem('token');
     }
}

</script>

<style >
h1{
    font-family: cursive;
    width: 212px;
    height: 82px;
    left: 0px;
    background: rgba(250, 255, 0, 0.24);
    opacity: 0.9;
}

.container{
    position: absolute;
    font-family: Roboto;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70%;
    height: 50%;
    left: 20%;
    top: 30%;
    background: #ffad8de3;
}

.container *{
    display: flex;
    justify-content: space-around;
}

label{
    font-family: cursive;
    font-size: 30px;
    color: #286b92e3;
}

#log{
    position: absolute;
    left: 0;
    top: 0;
}
#image{
    position: absolute;
    width: 400px;
    height: 430px;
    left: 35%;
    top: 200px;
}

</style>
