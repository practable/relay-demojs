import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";

export default defineComponent({
  name: "DisplayConnection",
  props: ["stream"],
  computed: {
    decoded: function (): string {
      try {
        return JSON.stringify(jwt_decode(this.stream.token), undefined, 2);
      } catch (e) {
        return "could not decode token";
      }
    },
  },
});
