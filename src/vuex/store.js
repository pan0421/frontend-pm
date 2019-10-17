import Vue from 'vue'
import Vuex, {Store} from 'vuex'

import product from './modules/product'
import user from './modules/user'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Store({
  mutations,
  actions,
  getters,
  modules: {
    product: product,
    user: user,
  }
})