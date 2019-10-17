import { RECEIVE_USER, RESET_USER, RECEIVE_TOKEN, RESET_TOKEN, CHANGE_PASSWORD } from "../mutation-types";
import { reqAutoLogin, reqUpdatePassword } from "../../api";

const state = {
  user: {},
  token: localStorage.getItem("token_key")
};

const mutations = {
  [RECEIVE_USER](state, { user }) {
    state.user = user;
  },

  [RECEIVE_TOKEN](state, { token }) {
    state.token = token;
  },

  [RESET_USER](state) {
    state.user = {};
  },

  [RESET_TOKEN](state) {
    state.token = "";
  },
  [CHANGE_PASSWORD](state, { user }) {
    state.user = user;
  }
};

const actions = {
  recordUser({ commit }, user) {
    localStorage.setItem("token_key", user.token);
    commit(RECEIVE_TOKEN, { token: user.token });
    delete user.token;
    commit(RECEIVE_USER, { user });
  },

  async changePsw({ commit, state }, newPassword) {
    const user = state.user;
    commit(CHANGE_PASSWORD, { user });
    const result = await reqUpdatePassword(user.username, newPassword);
    if (result.code === 0) {
      const user = result.data;
      commit(CHANGE_PASSWORD, { user });
    }
  },

  logout({ commit }) {
    commit(RESET_USER);
    commit(RESET_TOKEN);
    localStorage.removeItem("token_key");
  },

  async autoLogin({ commit, state }) {
    const token = state.token;
    if (token) {
      const result = await reqAutoLogin();
      if (result.code === 0) {
        const user = result.data;
        commit(RECEIVE_USER, { user });
      }
    }
  }
};

export default {
  state,
  mutations,
  actions
};
