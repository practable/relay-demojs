import { createStore, createLogger } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
  streams: [],
  streamsObtained: false,
  videoURL: "",
  videoURLObtained: false,
  dataURL: "",
  dataURLObtained: false,
  expiry: -1,
  expiryObtained: false,
  connectionCount: 0,
  videoBytes: 0,
  lastVideoBytes: 0,
  connectionsMade: 0,
  connectionsDropped: 0,
  connectionIsDropped: false,
  connectionDroppedAt: 0,
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
  //plugins: [createLogger()],
});

export default store;
