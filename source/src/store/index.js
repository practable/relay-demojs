import { createStore, createLogger } from "vuex";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const state = {
  connectionDroppedAt: 0,
  connectionIsDropped: false,
  dataURL: "",
  dataURLObtained: false,
  expiry: -1,
  expiryObtained: false,
  lastConnectionCheck: 0,
  lastDataWrite: 0,
  lastMessage: "",
  lastVideoWrite: 0,
  messageCount: 0,
  messageHistory: "",
  streams: [],
  streamsObtained: false,
  videoURL: "",
  videoURLObtained: false,
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
  //plugins: [createLogger()],
});

export default store;
