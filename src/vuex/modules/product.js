import { RECEIVE_PRODUCTS } from "../mutation-types";

const state = {
  products: []
};

const mutations = {
  [RECEIVE_PRODUCTS](state, { products }) {
    state.products = products;
  }
};

const actions = {
  recordProduct({ commit }, products) {
    commit(RECEIVE_PRODUCTS, { products });
  }
};

export default {
  state,
  mutations,
  actions
};
