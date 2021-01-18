import Axios from "@/utils/axios";

const state = () => ({
  data: [],
  site: {},
  page: 1,
  limit: 15
});

// getters
const getters = {};

// actions
const actions = {
  fetchSites({ commit, state }) {
    return Axios.get(`sites?_page=${state.page}&_limit=${state.limit}`)
      .then(({ data }) => {
        commit("setSites", data);
      })
      .catch(error => {
        throw new Error(error);
      });
  },
  addSite({ commit }) {
    commit("increment");
  },
  fetchSite({ commit }, id) {
    return Axios.get(`sites/${id}`)
      .then(({ data }) => {
        commit("setSite", data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

// mutations
const mutations = {
  setSites(state, sites) {
    if (state.page > 1) {
      console.log(sites, "sites");
      state.data = [...state.data, ...sites];
    } else {
      state.data = sites;
    }
  },
  setSite(state, site) {
    state.site = site;
  },
  increment(state) {
    state.page++;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
