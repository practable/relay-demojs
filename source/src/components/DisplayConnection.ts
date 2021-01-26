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
    tokenSnippet: function (): string {
      if (this.stream.hasOwnProperty("token")) {
        var t = this.stream.token;
        var ts = t.substring(0, 6);
        var tn = t.length.toString();
        var te = t.slice(t.length - 6);

        return ts + "..." + te + " (" + tn + " chars)";
      } else {
        return "(none supplied)";
      }
    },
  },
});
