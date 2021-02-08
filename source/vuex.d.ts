// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    streams: [];
    streamsObtained: false;
    videoURL: "";
    videoURLObtained: false;
    dataURL: "";
    dataURLObtained: false;
    expiry: -1;
    expiryObtained: false;
    connectionCount: 0;
    videoBytes: 0;
    lastVideoBytes: 0;
    connectionsMade: 0;
    connectionsDropped: 0;
    connectionIsDropped: false;
    connectionDroppedAt: 0;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
