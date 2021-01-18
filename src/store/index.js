import { createStore } from "vuex";
import sites from "./modules/sites";
import clients from "./modules/clients";
export default createStore({
  modules: {
    sites,
    clients
  }
});
