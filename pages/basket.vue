<template>
  <div class="p-2" >

    <h3 class="text-center p-5" v-if="getBasketList.length <= 0">Sepetiniz boş</h3>

    <div class="pWrapper" v-for="p in getBasketList/*getBasketList.filter(onlyUnique)*/" :key="p.id">
      <img @click="delBasket(p)" src="../static/assets/img/delete.png" class="delete">
      <div class="name">{{ p.name }}</div>
      <div class="price p-2 bg-dark text-white"> 
        <button class="btn btn-info" @click="artir(p)"> + </button> 
        <span class="text-center p-3">${{ p.price }} x {{p.count}}</span>
        <button class="btn btn-danger" @click="azalt(p)"> - </button> 

      </div>
    </div>

    <div class="total" > ${{sumOfProducts}} </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vuex from 'vuex'

import {
  GET_BASKET,
  GET_PRODUCTS,
  GET_DEL_BASKET,
  GET_DECREASE,
  GET_INCREASE
} from '@/store/types/actions.type'

export default {
  computed: {
    ...mapGetters({
      getBasketList: 'basket/getBasket',
      sumOfProducts: 'basket/sumOfProducts',
    }),
  },
  methods:{
    delBasket(p){
      this.$store.dispatch('basket/' + GET_DEL_BASKET, p)
      this.$toast.error('Product is deleted').goAway(1000)
    },
    azalt(p){
      this.$store.dispatch('basket/' + GET_DECREASE, p)
      this.$toast.error('decreased').goAway(1000)
    },
    artir(p){
      this.$store.dispatch('basket/' + GET_INCREASE, p)
      this.$toast.success('increased').goAway(1000)
    },    
  }
}
</script>

<style lang="scss" scoped>
  .pWrapper{
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #ddd;


    .name{display: flex; flex-direction: column; width: 80%; float: left;}
    .price{display: flex; flex-direction: column; width: 20%; float: right; color: darkmagenta; text-align: left  }
  }

  .total{
    text-align: right;
    padding: 10px;
    color:darkmagenta;
    font-size: 22px;
  }

  .delete{cursor: pointer; height: 22px; margin-right: 10px;}
</style>