import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";
import router from "@/router";
import signin from "@/store/modules/signin";
import convert from "@/store/modules/convert";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    signin,
    convert
  },
  state: {},
  mutations: {},
  getters: {},
  actions: {}
});
