import Vue from 'vue'

document.addEventListener("DOMContentLoaded",()=>{
  new Vue({
    el:"#app",
    data:{
      title: "Currency Conversion Website",
      currentRates:"Current Exchange Rates",
      currencies:[],
      euros:0,
      desiredCurrency:null,
      convertedValue:0
    },
    mounted(){
      this.getRates()
    },


    methods:{
      getRates:function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json()) //for reference- ensure correct arrow syntax used
        .then(data =>this.currencies=data.rates)
      }
    }





  })





})
