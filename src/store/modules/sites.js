import Axios from "@/utils/axios";

const state = () => ({
  data: []
});

// getters
const getters = {};

// actions
const actions = {
  fetchSites({ commit }) {
    return Axios.get("sites")
      .then(({ data }) => {
        console.log(data, "sites actions");
        commit("setSites", data);
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

// mutations
const mutations = {
  setSites(state, sites) {
    state.data = sites;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
