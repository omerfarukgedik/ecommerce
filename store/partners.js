import {
  SET_PARTNERS,
} from '@/store/types/mutations.type'

import {
  GET_PARTNERS,
} from '@/store/types/actions.type'


export const state = () => ({
  partners: []
})

export const mutations = {
  [SET_PARTNERS] (state, value) {
    state.partners.push(value)
  },
}

export const actions = {
  [GET_PARTNERS] ({ commit }, value) {
    commit(SET_PARTNERS, value)
  },
}

export const getters = {
  getPartners: state => state.partners,
}