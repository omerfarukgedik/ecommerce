import {
  SET_PRODUCTS,
} from '@/store/types/mutations.type'

import {
  GET_PRODUCTS,
} from '@/store/types/actions.type'


export const state = () => ({
  products: [],
})

export const mutations = {
  [SET_PRODUCTS] (state, value) {
    state.products = value
  },
}

export const actions = {
  [GET_PRODUCTS] ({ commit }, value) {
    commit(SET_PRODUCTS, value)
  },
}

export const getters = {
  getProducts: state => state.products,
  getProductsByCategoryID: state => (catId) => {
    return state.products.find(p => p.catId === catId)
  }
}