import { createStore, createLogger } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
  streams: [],
  streamObtained: false,
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()],
});

export default store;
