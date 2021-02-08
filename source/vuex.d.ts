// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
  // declare your own store states
  interface State {
    connectionDroppedAt: 0;
    connectionIsDropped: false;
    dataURL: "";
    dataURLObtained: false;
    expiry: -1;
    expiryObtained: false;
    lastVideoCheck: 0;
    lastVideoWrite: 0;
    streams: [];
    streamsObtained: false;
    videoURL: "";
    videoURLObtained: false;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
