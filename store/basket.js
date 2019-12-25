import {
  SET_BASKET,
  SET_DEL_BASKET,
  SET_INCREASE,
  SET_DECREASE
} from '@/store/types/mutations.type'

import {
  GET_INCREASE,
  GET_DECREASE,
  GET_BASKET,
  GET_DEL_BASKET
} from '@/store/types/actions.type'


export const state = () => ({
  basket: [],
})

export const mutations = {
  [SET_BASKET] (state, value) {
    state.basket.push(value);
  },
  [SET_DEL_BASKET] (state, value){
    let prdctIndex = state.basket.findIndex(t => t.id = value.id)
    state.basket.splice(prdctIndex, 1)
  },
  [SET_INCREASE] (state, value){
    let count = state.basket.filter((x) => x.id == value.id);
    if(count.length > 0) {value.count++;}
  },
  [SET_DECREASE] (state, value){
    let count = state.basket.filter((x) => x.id == value.id);
    if(count.length > 0) {value.count--;}
  }
}

export const actions = {
  [GET_BASKET] ({ commit }, value) {
    commit(SET_BASKET, value)
  },
  [GET_DEL_BASKET] ({ commit }, value) {
    commit(SET_DEL_BASKET, value)
  },
  [GET_INCREASE] ({ commit }, value){
    commit(SET_INCREASE, value)
  },
  [GET_DECREASE] ({ commit }, value){
    commit(SET_DECREASE, value)
  }
}

export const getters = {
  getBasket: state => state.basket,
  sumOfProducts: state => {
    let sum = 0;
    state.basket.forEach(p => {
      sum += p.count * p.price;
    });
    return sum;
  },
  countOfProducts: state => {
    let c = 0
    state.basket.forEach(p => {
      c += p.count
    })

    return c
  }
}