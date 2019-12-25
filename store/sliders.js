import {
  SET_SLIDERS,
} from '@/store/types/mutations.type'

import {
  GET_SLIDERS,
} from '@/store/types/actions.type'


export const state = () => ({
  sliders: [],
})

export const mutations = {
  [SET_SLIDERS] (state, value) {
    state.sliders = value
  },
}

export const actions = {
  [GET_SLIDERS] ({ commit }, value) {
    commit(SET_SLIDERS, value)
  },
}

export const getters = {
  getSliders: state => state.sliders,
}