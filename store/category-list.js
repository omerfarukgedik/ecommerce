import {
  SET_CATEGORIES,
} from '@/store/types/mutations.type'

import {
  GET_CATEGORIES,
} from '@/store/types/actions.type'


export const state = () => ({
  categories: [],
})

export const mutations = {
  [SET_CATEGORIES] (state, value) {
    state.categories = value
  },
}

export const actions = {
  [GET_CATEGORIES] ({ commit }, value) {
    commit(SET_CATEGORIES, value)
  },
}

export const getters = {
  getCategories: state => state.categories,
}