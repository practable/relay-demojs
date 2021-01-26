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
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
