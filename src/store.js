import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      email: '',
    },
    auth: {
      access_token: '',
      refresh_token: '',
    },
  },
  mutations: {
    LOG_IN(state, payload) {
      state.auth.access_token = payload.access_token;
      state.auth.refresh_token = payload.refresh_token;
    },
    LOG_OUT(state) {
      state.access_token = '';
      state.refresh_token = '';
    },
  },
  actions: {
    login({ commit }) {
      const data = {
        email: 'admin@mail.com',
        password: 'admin',
      };
      axios.post('/auth/login', data)
        .then(response => {
          commit('LOG_IN', response.data);
        })
        .catch(error => {
          console.error('Log in error', error);
        });
      //
    },
    logout() {
      //
    },
    register({ commit }) {
      const data = {
        email: 'admin@mail.com',
        password: 'admin',
      };
      axios.post('/auth/купшыеук', data)
        .then(response => {
          commit('REGISTER', response.data);
        })
        .catch(error => {
          console.error('Log in error', error);
        });
    },
  },
  getters: {

  },
});
